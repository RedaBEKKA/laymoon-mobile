import React from 'react';
import {ImageBackground, Platform, Dimensions, FlatList} from 'react-native';
import {Box, HStack, Text, Image, Pressable, ScrollView} from 'native-base';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../Shared/Input';
import {setSelectedBeneficiary} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(4, 'invalide Nom du bénéficiaire!')
    .required('Nom du bénéficiaire obligatoire!'),
  iban: Yup.string()
    .trim()
    .min(4, 'invalide BAN!')
    .required('BAN obligatoire!'),
  bic: Yup.string().trim().min(4, 'invalide BIC!').required('BIC obligatoire!'),
});
const Status3 = ({route, navigation}) => {
  // const {user, token} = route.params;
  const dispatch = useDispatch();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const [listData, setListData] = React.useState([]);
  let [isLoading, setLoading] = useState(false);
  let [listLoading, setlistLoading] = useState(true);
  let beneficiaryInfo = {name: '', iban: '', bic: ''};

  const goToNextTab = () => {
    navigation.navigate('Status2', {name: 'Status2'});
  };
  const createBeneficiary = beneficiaryInfo => {
    setListData([]);
    beneficiaryInfo.nickName = beneficiaryInfo.name;
    beneficiaryInfo.userId = user.userId;
    beneficiaryInfo.address = 'string';
    setLoading(true);
    try {
      fetch(
        'https://adl-bank-gateway-svc-tjpme5gjea-nw.a.run.app/v1/beneficiaries',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${sessionStorage.AccessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(beneficiaryInfo),
        },
      )
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setSelectedBeneficiary(res.data.beneficiary));
            goToNextTab();
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
  return (
    <Box
      bg="gray.100"
      style={{
        height: Platform.select({
          ios: screen.height,
          android: screen.height + 10,
        }),
      }}>
      <Box width={'90%'} alignSelf="center">
        <Box
          height={220}
          style={{paddingTop: Platform.select({ios: 50, android: 50})}}>
          <HStack direction="row" mb={25}>
            <Text flex={10} px={2} fontSize="2xl" fontWeight="bold">
              Ajouter un bénéficiaire
            </Text>
            <Box mt={2} flex={1.5}>
              <Pressable
                alignSelf="center"
                onPress={() =>
                  navigation.navigate('Status2', {name: 'Status2'})
                }>
                <Image
                  alt="icon"
                  source={require('../../assets/images/iconClose.png')}
                />
              </Pressable>
            </Box>
          </HStack>
          <HStack
            bg="white"
            borderRadius={15}
            p={2}
            height={70}
            borderWidth={1}
            borderColor="#a18cdf"
            flexDirection="row"
            width="100%"
            alignSelf="center"
            mt={2}>
            <Box flex={6}>
              <Text fontSize="19" pl={2} fontWeight="bold">
                Pays
              </Text>
              <Text color="gray.500" lineHeight="18" fontSize="16" pl={2}>
                France
              </Text>
            </Box>
            <Box mt={2} flex={0.7}>
              <Icon name="chevron-forward" size={28} color="grey" />
            </Box>
          </HStack>
        </Box>
      </Box>
      <Formik
        initialValues={beneficiaryInfo}
        validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          beneficiaryInfo.name = values.name;
          beneficiaryInfo.iban = values.iban;
          beneficiaryInfo.bic = values.bic;
          createBeneficiary(beneficiaryInfo);
          formikActions.resetForm({
            values: {
              name: '',
              iban: '',
              bic: '',
            },
          });
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <Box
            style={[styles.scrollHeight, {width: '90%', alignSelf: 'center'}]}>
            <Input
              placeholder="Nom du bénéficiaire"
              value={values.name}
              setValue={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name}
            />
            <Input
              placeholder="IBAN"
              value={values.iban}
              setValue={handleChange('iban')}
              onBlur={handleBlur('iban')}
              error={errors.iban}
            />
            <Input
              placeholder="BIC"
              value={values.bic}
              setValue={handleChange('bic')}
              onBlur={handleBlur('bic')}
              error={errors.bic}
            />

            {isLoading ? (
              <Text>Chargement...</Text>
            ) : (
              <Pressable
                mt={6}
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#b4ce26',
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
              {listLoading ? (
                <Text></Text>
              ) : (
                <FlatList
                  data={listData}
                  renderItem={({item, index}) => {
                    return (
                      <Box>
                        <Text color="#FF2828">{item.message} </Text>
                      </Box>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              )}
            </Box>
          </Box>
        )}
      </Formik>

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

export default Status3;