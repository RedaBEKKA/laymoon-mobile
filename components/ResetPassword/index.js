import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import Constants from '../../constants/constants';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import Icon from 'react-native-vector-icons/Ionicons';
import useTogglePasswordVisibility from '../hooks/useTogglePasswordVisibility';
import {
  authenticateUser,
  setToken,
} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';

const screen = Dimensions.get('window');


const ResetPassword = ({route, navigation}) => {
    const { username } = route.params;
    const [headerHeight, setHeaderHeight] = useState(null);
    const dispatch = useDispatch();
    const {token,user} = useSelector(state => state.userReducer);
    const {passwordVisibility, rightIcon, handlePasswordVisibility} =
      useTogglePasswordVisibility();
    const tokenUrl = `${Constants.tokenUrl}`;
    const [meta, setMeta] = useState();

    const onAccessToken = userInfo => {
        setMeta();
        try {
          fetch(tokenUrl)
            .then(response => response.json())
            .then(res => {
              if (res.status == 'success') {
                //resetPassword(res.data.AccessToken, userInfo);
              }
            });
        } catch (error) {
          console.error('token error', error);
        } finally {
        }
      };

    const resetPassword = (userInfo) => {setMeta();
      try {
          fetch(
          `https://adl-bank-gateway-svc-tjpme5gjea-nw.a.run.app/v1/authentication/forgot/confirm/new/password/users`,
          {   method: 'POST',
              headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            'Content-Type': 'application/json',
              },
              body: JSON.stringify(userInfo),
          } )
          .then(resp => resp.json())
          .then(response => {
              console.log("resp",response)
              if (response.status == 'success') {
              navigation.navigate('Login', {
              name: 'Login',
              });
              }
              else if (response.StatusCode== 400){
                setMeta(response.StatusDescription);
              }
              else {
              setMeta(response.StatusDescription.confirmationCode[0]);
              }
          });
      } catch (error) {
          console.error(error);
      } finally { }
    };

    let userInfo = {
        password: '',
        confirmPassword: '',
        confirmCode: '',
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
        confirmPassword: Yup.string()
        .required('Mot de passe required!')
        .equals(
          [Yup.ref('password'), null],
          'le mot de passe ne correspond pas!',
        ),
        confirmCode: Yup.string()
        .trim()
        .min(4, 'le code est trop tiré!')
        .required('code requis!')
      });

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

    const goToPrev = () => {
        navigation.navigate('LoginPage2', {
        name: 'LoginPage2',
        });
    };

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        userInfo.password = values.password;
        userInfo.confirmCode = values.confirmCode;
        let userRequest={
          userPassword:values.password,
          confirmationCode:values.confirmCode,
          userName:username
        }
        resetPassword(userRequest);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <Box
          style={styles.imageBackGround}>
            <AuthHeader
              height={headerHeight}
              title="Réinitialisation du"
              title2="mot de passe"
            />
            <HStack direction="row">
              <Box style={styles.formLayout}>
                <Box style={{width: '90%', alignSelf: 'center'}}>
                  <Text style={[styles.subtitle, {marginBottom: 0}]}>
                    Connexion
                  </Text>
                <HStack direction="row">
                  <Box flex={9}>
                    <TextInput
                      value={values.password}
                      placeholder="Mot de passe"
                      onChangeText={handleChange('password')}
                      secureTextEntry={passwordVisibility}
                      placeholderTextColor="#9B96AB"
                      onBlur={handleBlur('password')}
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
                <Text color="red.600">{errors.confirmPassword}</Text>

                <Input
                  placeholder="entrez le code"
                  value={values.confirmCode}
                  setValue={handleChange('confirmCode')}
                  onBlur={handleBlur('confirmCode')}
                  error={errors.confirmCode}
                />
                  <Box style={styles.buttonWrapper}>
                    <AuthButtonLayout
                      navigation={navigation}
                      onPress={handleSubmit}
                      title="Précédent"
                      // page="Status1"
                      goToPrev={goToPrev}
                      page="SignUp1"
                      buttonText="Connexion"
                    />
                  </Box> {meta && (
                    <Text color="red.600">{meta}</Text>
                  )}
                </Box>
              </Box>
            </HStack>
        </Box>
      )}
    </Formik>
  );
};

export default ResetPassword;









