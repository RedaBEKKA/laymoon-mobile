import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, TextInput, FlatList, View} from 'react-native';
import styles from './styles';
import {
  Box,
  Text,
  Image,
  HStack,
  Pressable,
  ScrollView,
  Alert,
} from 'native-base';
import Constants from '../../constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectBox from 'react-native-multi-selectbox';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
const screen = Dimensions.get('window');
const Status1 = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {sessionStorage, selectedBeneficiary} = useSelector(
    state => state.userReducer,
  );
  const {cardDropdown} = useSelector(state => state.cardReducer);
  const [amount, setAmountValue] = useState(0);
  const [listData, setListData] = React.useState([]);
  let [isLoading, setLoading] = useState(false);
  let [listLoading, setlistLoading] = useState(true);
  let [selectedCard, setSelectedCard] = React.useState({});
  let transferInfo = {
    amount: '',
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number().typeError('le montant doit être un type numérique')
    .required('goupille requise')
  });

  function onCardChange() {
    return val => setSelectedCard(val);
  }

  const createTransfer = (data) => {
    setListData([]);
    try {
      setLoading(true);
      let userRequest = mapTransferRequest(data.amount);
      fetch(`${Constants.baseUrl}payouts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRequest),
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            Alert.alert('successfully saved');
          } else if (res.StatusCode === '0000') {
            const validations = [];
            for (
              let i = 0;
              i != Object.keys(res.StatusDescription).length;
              i++
            ) {
              let validationMessages = Object.values(res.StatusDescription)[i];
              if (validationMessages.length > 0) {
                validationMessages.forEach(v => {
                  validations.push({id: i + 1, message: v});
                });
                if (i == Object.keys(res.StatusDescription).length - 1) {
                  setListData(validations);
                }
              }
            }
          } else if (res.StatusCode === 0) {
            const validations = [];
            validations.push({
              id: 1,
              message: res.StatusDescription.errors[0].message,
            });
            setListData(validations);
          }
        })
        .finally(() => {
          setlistLoading(false);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  function mapTransferRequest(data) {
    let transferRequest = {
      walletId: selectedCard.id,
      amount: data,
      beneficiaryId: selectedBeneficiary.id,
      currency: 'EUR',
    };
    return transferRequest;
  }

  return (
    <Box
      bg="#fcfcfc"
      style={{
        height: Platform.select({
          ios: screen.height,
          android: screen.height + 10,
        }),
      }}>
      <Box style={{paddingTop: Platform.select({ios: 50, android: 50})}} px={6}>
        <Text fontWeight="bold" fontSize="3xl">
          Faire un virement
        </Text>
        <Text mt={4} pb={0} pb={0} color="gray.500">
          Choisir un compte
        </Text>

        <Formik
              initialValues={transferInfo}
              validationSchema={validationSchema}
              onSubmit={(values, formikActions) => {
                transferInfo.amount = values.amount;
                console.log("submitted")
                createTransfer(transferInfo)
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
      <Box>
        <Box height={180}>
          <HStack
            bg="white"
            borderRadius={15}
            p={2}
            borderWidth={2}
            borderColor="#f7f4ff"
            flexDirection="row"
            width="100%"
            alignSelf="center"
            mt={2}>
            <Box flex={2.8} pt={1}>
              <Image
                width="90"
                height="50"
                source={require('../../assets/images/bankcard.png')}
                alt="ico"
              />
            </Box>
            <Box flex={5}>
              <SelectBox
                labelStyle={{color: '#9B96AB', fontSize: 14}}
                inputPlaceholder="Sélectionner"
                listOptionProps={{
                  color: '#9B96AB',
                  fontSize: 14,
                  height: 80,
                }}
                label="Compte"
                options={cardDropdown}
                value={selectedCard}
                onChange={onCardChange()}
                hideInputFilter={true}
              />
            </Box>
          </HStack>
        </Box>
          <HStack
            bg="white"
            borderRadius={15}
            px={2}
            height={95}
            borderWidth={2}
            borderColor="#f7f4ff"
            width="100%"
            alignSelf="center"
            mt={4}>
            <Box width="100%" alignSelf="center">
              <Text
                textAlign="center"
                fontSize="18"
                color="gray.500"
                // pl={2}
                pt={3}
                fontWeight="bold">
                Montant
              </Text>
              <HStack flexDirection="row">
                <Box style={{marginLeft: screen.width / 50}} flex={8}>
                  <TextInput
                    value={values.amount}
                    placeholder="0"
                    keyboardType="numeric"
                    onChangeText={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    style={[styles.inputStyle]}
                  />
                </Box>
                <Box flex={2}>
                  <Text pt={1}fontSize="22" fontWeight={'bold'}>
                    €
                  </Text>
                </Box>
              </HStack>
                  <Text color="red.600">{errors.amount}</Text>
            </Box>
          </HStack>
          <Text mt={4} pb={0} pb={0} color="gray.500">
            Destinataire
          </Text>
          {Object.keys(selectedBeneficiary).length > 0 && (
            <HStack
              bg="white"
              borderRadius={15}
              p={2}
              // height={71}
              borderWidth={2}
              borderColor="#f7f4ff"
              flexDirection="row"
              width="100%"
              alignSelf="center"
              mt={2}>

              <Box flex={1}>
                <Text fontSize="19" lineHeight="45" pl={2} fontWeight="bold">
                  {selectedBeneficiary.name}
                </Text>
              </Box>
            </HStack>
          )}
          <Pressable
            onPress={() => {
              navigation.navigate('Status2', {name: 'Status2'});
            }}>
            <HStack
              bg="white"
              borderRadius={15}
              p={2}
              height={71}
              borderWidth={2}
              borderColor="#f7f4ff"
              flexDirection="row"
              width="100%"
              alignSelf="center"
              mt={2}>
              <Box flex={5}>
                <Text fontSize="xl" pt={2} pl={2} fontWeight="bold">
                Choisir une bénéficiaire
                </Text>
              </Box>
              <Box flex={1} pt={2}>
                <Icon name="chevron-forward" size={28} color="grey" />
              </Box>
            </HStack>
          </Pressable>
          {isLoading ? (
            <Text>Chargement...</Text>
          ) : (
            <Pressable
              mt={6}
              style={{
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#26c69c',
                margin: 10,
                opacity: 1,
                paddingRight: 25,
                paddingLeft: 25,
                height: 45,
              }}
              onPress={handleSubmit}>
              <HStack direction="row">
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                  py={3}>
                  Valider
                </Text>
              </HStack>
            </Pressable>
          )}
          <Box>
            <FlatList
              data={listData}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Text color="#FF2828">{item.message} </Text>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </Box>
        </Box>
 )}
            </Formik>
      </Box>


      <Box
        style={{
          width: '100%',
          position: 'absolute',
          bottom: Platform.select({ios: 2, android: 0}),
        }}>
        <Box
          bg="white"
          p={4}
          shadow={2}
          style={{
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}>
          <HStack flexDirection="row">
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('Home1', {name: 'Home1'})}>
                <Image
                  mt={1}
                  width="6"
                  height="7"
                  alt="alt"
                  source={require('../../assets/images/home_grey.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1} pb={1}>
              <Pressable
                alignSelf="center"
                onPress={() =>
                  navigation.navigate('Status1', {name: 'Status1'})
                }>
                <Image
                  mt={1}
                  width="8"
                  height="7"
                  alt="alt"
                  source={require('../../assets/images/arrows_green.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('Card1', {name: 'Card1'})}>
                <Image
                  width="35"
                  height="30"
                  alt="alt"
                  source={require('../../assets/images/cardNavBackground.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('Card4', {name: 'Card4'})}>
                <Image
                  mt={1}
                  width="6"
                  height="7"
                  alt="alt"
                  source={require('../../assets/images/listNavBackground.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('FAQ', {name: 'FAQ'})}>
                <Image
                  mt={1}
                  width="8"
                  height="6"
                  alt="alt"
                  source={require('../../assets/images/chatNavBackground.png')}
                />
              </Pressable>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Status1;
