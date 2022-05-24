import React, {useState, useEffect} from 'react';
import {ImageBackground, Dimensions, Keyboard, TextInput} from 'react-native';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import Button from '../Shared/Button';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import {setUser} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import useTogglePasswordVisibility from '../hooks/useTogglePasswordVisibility';
import Constants from '../../constants/constants';
const screen = Dimensions.get('window');

const SignUp4 = ({route, navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const {user} = useSelector(state => state.userReducer);
  const tokenUrl = `${Constants.tokenUrl}`;
  const [meta, setMeta] = useState();
  const dispatch = useDispatch();
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  let userInfo = {
    password: '',
    confirmPassword: '',
    pin: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .trim()
      .min(8, 'le mot de passe est trop tiré!')
      .required('Mot de passe required!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "le mot de passe est trop tiré” when less than 8 characters"
      ),
    confirmPassword: Yup.string().equals(
      [Yup.ref('password'), null],
      'le mot de passe ne correspond pas!',
    ),
    pin: Yup.number()
            .min(4, 'Doit contenir exactement 4 chiffres')
            //.max(4, 'Doit contenir exactement 4 chiffres')
    
  });

  const goToPrev = () => {
    navigation.navigate('SignUp2', {
      name: 'SignUp2',
    });
  };

  const goToNextTab = () => {
    navigation.navigate('SignUp5', {
      name: 'SignUp5',
    });
  };

  const onAccessToken = userInfo => {
    setMeta();
    try {
      fetch(tokenUrl)
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setToken(res.data.AccessToken));
            onSignInPressed(res.data.AccessToken, userInfo);
          }
        });
    } catch (error) {
      console.error('token error', error);
    } finally {
    }
  };

    const onSignInPressed = (tokenData, userInfo) => {
    try {
        fetch(
        `${Constants.baseUrl}authentication/users/${userInfo.username}/${userInfo.password}`,
        {
            headers: {
            Authorization: `Bearer ${tokenData}`,
            },
        },
        )
        .then(response => response.json())
        .then(signResponse => {
            if (signResponse.status === 'success') {
            dispatch(authenticateUser(signResponse.data));
          
            } else {
            setMeta(signResponse);
            }
        });
    } catch (error) {
        console.error(error);
    } finally {
    }
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
        user.password = values.password;
        user.userTypeId = '1';
        user.mobile = user.phone;
        user.specifiedUSPerson = '0';
        user.pinCode=values.pin
        dispatch(setUser(user));
        goToNextTab();
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <Box
          style={styles.imageBackGround}>
          <AuthHeader
            height={headerHeight}
            title="Créer un"
            title2="compte 4/4"
          />
          <HStack direction="row">
            <Box style={styles.formLayout}>
              <Box style={{width: '90%', alignSelf: 'center'}}>
                <Text style={styles.subtitle}>Choisissez un mot de passe</Text>
                <Input
                  placeholder="Mot de passe"
                  value={values.password}
                  setValue={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password}
                />
                <HStack direction="row">
                  <Box flex={9}>
                    <TextInput
                      value={values.confirmPassword}
                      placeholder="Ressaisissez le Mot de passe"
                      onChangeText={handleChange('confirmPassword')}
                      secureTextEntry={passwordVisibility}
                      placeholderTextColor="#9B96AB"
                      onBlur={handleBlur('confirmPassword')}
                      style={[styles.inputStyle]}
                    />
                  </Box>
                  <Box style={[styles.inputStyle]} flex={1}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <Icon name={rightIcon} color="#26c69c" size={25} />
                    </Pressable>
                  </Box>
                </HStack>
                <Text color="red.600">{errors.password}</Text>
                <Text style={styles.subtitle}>Choisissez votre code Pin</Text>
                <Input
                  placeholder="broche"
                  value={values.pin}
                  setValue={handleChange("pin")}
                  onBlur={handleBlur("pin")}
                  error={errors.pin}
                />
                <Box style={styles.buttonWrapper}>
                  <AuthButtonLayout
                    navigation={navigation}
                    title="Précédent"
                    page="SignUp5"
                    onPress={handleSubmit}
                    buttonText="Terminer"
                    goToPrev={goToPrev}
                  />
                </Box>
              </Box>
            </Box>
          </HStack>
          <Box p={screen.height / 5} width="100%" bg={'white'}></Box>
        </Box>
      )}
    </Formik>
  );
};

export default SignUp4;