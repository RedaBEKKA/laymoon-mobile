import React, {useState, useEffect} from 'react';
import {TextInput, Dimensions, Keyboard} from 'react-native';
import {Box, HStack, Text, Image, Select,Pressable} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import {setUser} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';
const screen = Dimensions.get('window');

const SignUp2 = ({route, navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // let {userRequest} = route.params;

   const countryArray = [
    {
      description: 'Allemagne',
      countryCode: 'DE',
      id: 'DE',
    },
    {
      description: 'Autriche',
      countryCode: 'AT',
      id: 'AT',
    },
    {
      description: 'Belgique',
      countryCode: 'BE',
      id: 'BE',
    },
    {
      description: 'Bulgarie',
      countryCode: 'BG',
      id: 'BG',
    },
    {
      description: 'Chypre',
      countryCode: 'CY',
      id: 'CY',
    },
    {
      description: 'Croatie',
      countryCode: 'HR',
      id: 'HR',
    },
    {
      description: 'Danemark',
      countryCode: 'DK',
      id: 'DK',
    },
    {
      description: 'Espagne',
      countryCode: 'ES',
      id: 'ES',
    },
    {
      description: 'Estonie',
      countryCode: 'EE',
      id: 'EE',
    },
    {
      description: 'Finlande',
      countryCode: 'FI',
      id: 'FI',
    },
    {
      description: 'La France',
      countryCode: 'FR',
      id: 'FR',
    },
    {
      description: 'Grèce',
      countryCode: 'GR',
      id: 'GR',
    },
    {
      description: 'Hongrie',
      countryCode: 'HU',
      id: 'HU',
    },
    {
      description: 'Irlande',
      countryCode: 'IE',
      id: 'IE',
    },
    {
      description: 'Italie',
      countryCode: 'IT',
      id: 'IT',
    },
    {
      description: 'Lettonie',
      countryCode: 'LV',
      id: 'LV',
    },
    {
      description: 'Lituanie',
      countryCode: 'LT',
      id: 'LT',
    },
    {
      description: 'Luxembourg',
      countryCode: 'LU',
      id: 'LU',
    },
    {
      description: 'Malte',
      countryCode: 'MT',
      id: 'MT',
    },
    {
      description: 'Pologne',
      countryCode: 'PL',
      id: 'PL',
    },
    {
      description: 'Portugal',
      countryCode: 'PT',
      id: 'PT',
    },
    {
      description: 'République tchèque',
      countryCode: 'CZ',
      id: 'CZ',
    },
    {
      description: 'Roumanie',
      countryCode: 'RO',
      id: 'RO',
    },
    {
      description: 'Slovaquie',
      countryCode: 'SK',
      id: 'SK',
    },
    {
      description: 'Slovénie',
      countryCode: 'SI',
      id: 'SI',
    },
  ];

  let userInfo = {
    address1: '',
    postcode: '',
    city: '',
    country: '',
    email: '',
    phone: '',
  };

  const validationSchema = Yup.object().shape({
    address1: Yup.string()
      .trim()
      .min(2, 'invalide Numéro, rue')
      .required('Numéro, rue required!'),
    postcode: Yup.string()
      .trim()
      .min(5, 'invalide Code Postal')
      .required('Code Postal obligatoire!'),
    city: Yup.string()
      .trim()
      .min(2, 'invalide Ville')
      .required('Ville required!'),
    country: Yup.string()
      .trim()
      .min(2, 'invalide Pays')
      .required('Pays obligatoire!'),
    email: Yup.string()
      .email('invalide Adresse mail')
      .required('Adresse mail obligatoire!'),
    phone: Yup.string()
      .trim()
      .min(9, 'invalide Téléphone')
      .required('Téléphone obligatoire!'),
  });

  const goToPrev = () => {
    navigation.navigate('SignUp1', {
      name: 'SignUp1',
    });
  };

  const goToNextTab = () => {
    navigation.navigate('SignUp4', {
      name: 'SignUp4',
    });
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setHeaderHeight(55);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setHeaderHeight(null);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        user.address1 = values.address1;
        user.city = values.city;
        user.country = values.country;
        user.email = values.email;
        user.phone = '+33'+ values.phone;
        user.postcode = values.postcode;
        dispatch(setUser(user));
        goToNextTab();
      }}>
      {({handleChange, handleBlur,
        setFieldValue, handleSubmit, values, errors, touched}) => (
        <Box
          style={styles.imageBackGround}>
          <AuthHeader
            height={headerHeight}
            title="Créer un"
            title2="compte 2/4"
          />
          <HStack direction="row">
            <Box style={styles.formLayout}>
              <Box style={{width: '90%', alignSelf: 'center'}}>
                <Text style={styles.subtitle}>Adresse</Text>
                <Input
                  placeholder="Numéro, rue"
                  value={values.address1}
                  setValue={handleChange('address1')}
                  onBlur={handleBlur('address1')}
                  error={errors.address1}
                />
              </Box>
              <HStack
                direction="row"
                style={{width: '90%', alignSelf: 'center'}}>
                <Box px={1} flex={3}>
                  <Input
                    placeholder="Code Postal"
                    value={values.postcode}
                    setValue={handleChange('postcode')}
                    onBlur={handleBlur('postcode')}
                    error={errors.postcode}
                  />
                </Box>
                <Box px={1} flex={3}>
                  <Input
                    placeholder="Ville"
                    value={values.city}
                    setValue={handleChange('city')}
                    onBlur={handleBlur('city')}
                    error={errors.city}
                  />
                </Box>
              </HStack>
              <Box style={{width: '90%', alignSelf: 'center'}}>
              <Select
                  height={38}
                  pb={Platform.select({
                    ios: 4,
                    android: 1.5,
                  })}
                  fontSize="16"
                  fontWeight={500}
                  selectedValue={values.country}
                  accessibilityLabel="Pays"
                  placeholder="Pays"
                  _selectedItem={{
                    bg: 'gray.200',
                    endIcon: (
                      <Icon name="chevron-forward" size={28} color="grey" />
                    ),
                  }}
                  mt={1}
                  onValueChange={itemValue => {
                    setFieldValue('country', itemValue);
                  }}>
                  {countryArray.map(data => (
                    <Select.Item
                      key={data.countryCode}
                      label={data.description}
                      value={data.countryCode}
                    />
                  ))}
                </Select>
                <Text color="red.600" fontSize={12}>
                  {errors.country}
                </Text>
                {/* <Input
                  placeholder="Pays"
                  value={values.country}
                  setValue={handleChange('country')}
                  onBlur={handleBlur('country')}
                  error={errors.country}
                /> */}
                <Text style={styles.subtitle}>Coordonnées</Text>
                <Input
                  placeholder="Adresse mail"
                  value={values.email}
                  setValue={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                />
              </Box>
              <HStack
                direction="row"
                style={{width: '90%', alignSelf: 'center'}}>
                <Box px={1} flex={3}>
                <TextInput 
                placeholder="Indicatif"
                placeholderTextColor="#9B96AB"
                style={[styles.inputStyle]} 
                value = "+33"
                editable={false}/>
                  {/* <Input placeholder="Indicatif" editable={true} /> */}
                </Box>
                <Box px={1} flex={3}>
                  <Input
                    placeholder="Téléphone"
                    value={values.phone}
                    setValue={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    error={errors.phone}
                  />
                </Box>
              </HStack>

              <Box width="90%" alignSelf="center">
                <AuthButtonLayout
                  navigation={navigation}
                  title="Précédent"
                  onPress={handleSubmit}
                  page="SignUp3"
                  buttonText="Suivant"
                  goToPrev={goToPrev}
                />
              </Box>
            </Box>
          </HStack>
          <Box p={screen.height / 5} width="100%" bg={'white'}></Box>
        </Box>
      )}
    </Formik>
  );
};

export default SignUp2;
