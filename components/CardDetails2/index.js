import React, {useState, useEffect} from 'react';
import {TextInput, Platform, Dimensions, FlatList} from 'react-native';
import styles from './styles';
import Input from '../Shared/Input';
import {
  Box,
  Checkbox,
  Text,
  Image,
  Switch,
  VStack,
  HStack,
  Pressable,
  ScrollView,
} from 'native-base';
import {setCard,setCardOptionActive, setCardOptionOnline} from '../../actions/cards';
import Constants from '../../constants/constants';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import useTogglePasswordVisibility from '../hooks/useTogglePasswordVisibility';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');
const CardDetails2 = ({route, navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [loadingErrors, setLoadingErrors] = useState(false);
  const [responseListData, setResponseListData] = React.useState([]);
    const dispatch = useDispatch();
    const toggleSwitch = state => {
      dispatch(setCardOptionActive(state))
  };
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {card,} = useSelector(state => state.cardReducer);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const updateCard = (data) => {
    if(card!=undefined){
    setResponseListData([]);
    setLoadingErrors(true);
    try {
      fetch(
        `${Constants.baseUrl}cards/${card.cardId}/changePIN?currentPIN=${data.currentPIN}&newPIN=${data.newPIN}&confirmPIN=${data.confirmPIN}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${sessionStorage.AccessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            navigation.navigate('Card1', {name: 'Card1'});
          } else if (res.StatusCode === "0000") {
            let error = [];
            error.push({message: res.StatusDescription.currentPIN[0]});
            setResponseListData(error);
            setLoadingErrors(false);
          } else if (res.StatusCode == 0) {
            let error = [];
            error.push({message: res.StatusDescription.errors[0].message});
            setResponseListData(error);
            setLoadingErrors(false);
          }
        }).error(err=>{console.log(err)});
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
  };

  const validationSchema = Yup.object().shape({
    currentPIN: Yup.number()
    // .max(4)
      .required('ancien code requis !'),
      confirmPIN: Yup.number().equals(
      [Yup.ref('newPIN'), null],
      'confirmer le code ne correspond pas!',
    ),
    newPIN: Yup.number()
    // .max(4)
            .required('nouveau code requis !')
    
  });

  let cardInfo = {
    currentPIN: '',
    confirmPIN: '',
    newPIN: '',
  };
  useEffect(() => {
    if(card!=undefined){
    setIsEnabled(Boolean(card.isLive));
  }
  }, []);
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
        <HStack direction="row">
          <Text flex={10} fontWeight="bold" fontSize="3xl">
            Ma carte
          </Text>
          <Box mt={2} flex={1.5}>
            <Pressable
              alignSelf="center"
              onPress={() =>
                navigation.navigate('Card6', {
                  name: 'Card6',
                  user: user,
                  token: sessionStorage.AccessToken,
                })
              }>
              <Image
                alt="icon"
                source={require('../../assets/images/btnMenu.png')}
              />
            </Pressable>
          </Box>
        </HStack>

        <Box width="100%" mb={5}mt={2}>
          <Image
            width={'280'}
            height={'180'}
            alignSelf="center"
            alt="icon"
            source={require('../../assets/images/carte.jpg')}
          />
        </Box>

        <Formik 
          initialValues={cardInfo}
          validationSchema={validationSchema}
          onSubmit={(values, formikActions) => {
          updateCard(values)
          }}>
        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <Box mt={55}  width="100%">
          <HStack direction="row">
            <Box   width="100%">
                <Text style={styles.subtitle}>Choisissez Votre Code Pin</Text>
                <HStack direction="row">
                  <Box flex={9}>
                    <TextInput
                      value={values.currentPIN}
                      placeholder="ancien code"
                      keyboardType="numeric"
                      onChangeText={handleChange('currentPIN')}
                      secureTextEntry={passwordVisibility}
                      placeholderTextColor="#9B96AB"
                      onBlur={handleBlur('currentPIN')}
                      style={[styles.inputStyle]}
                    />
                  </Box>
                  <Box style={[styles.inputStyle]} flex={1}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <Icon name={rightIcon} color="#26c69c" size={25} />
                    </Pressable>
                  </Box>
                </HStack>
                <Text color="red.600">{errors.currentPIN}</Text>
                  <HStack direction="row">
                  <Box flex={9}>
                    <TextInput
                      value={values.newPIN}
                      placeholder="nouveau code"
                      keyboardType="numeric"
                      onChangeText={handleChange('newPIN')}
                      secureTextEntry={passwordVisibility}
                      placeholderTextColor="#9B96AB"
                      onBlur={handleBlur('newPIN')}
                      style={[styles.inputStyle]}
                    />
                  </Box>
                  <Box style={[styles.inputStyle]} flex={1}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <Icon name={rightIcon} color="#26c69c" size={25} />
                    </Pressable>
                  </Box>
                </HStack>
                <Text color="red.600">{errors.newPIN}</Text>

                <HStack direction="row">
                  <Box flex={9}>
                    <TextInput
                      value={values.confirmPIN}
                      placeholder="confirmer la broche"
                      keyboardType="numeric"
                      onChangeText={handleChange('confirmPIN')}
                      secureTextEntry={passwordVisibility}
                      placeholderTextColor="#9B96AB"
                      onBlur={handleBlur('confirmPIN')}
                      style={[styles.inputStyle]}
                    />
                  </Box>
                  <Box style={[styles.inputStyle]} flex={1}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <Icon name={rightIcon} color="#26c69c" size={25} />
                    </Pressable>
                  </Box>
                </HStack>
                <Text color="red.600">{errors.confirmPIN}</Text>

              </Box>
          </HStack>
          <Pressable
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: '#26c69c',
                  margin: 10,
                  opacity: 1,
                  paddingRight: 10,
                  paddingLeft: 10,
                  height: 45,
                  width: '90%',
                }}
                onPress={handleSubmit}>
                <HStack direction="row">
                  <Text
                    py={1}
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                    py={3}>
                    Valider
                  </Text>
                </HStack>
              </Pressable>
        </Box>
      )}
    </Formik>
    <Box>
            <FlatList
              data={responseListData}
              renderItem={({item, index}) => {
                return (
                  <Box>
                    <Text color="#FF2828">{item.message} </Text>
                  </Box>
                );
              }}
              keyExtractor={item => item.id}
            />
          </Box>
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
                  source={require('../../assets/images/arrowNavbackground.png')}
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

export default CardDetails2;