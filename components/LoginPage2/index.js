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
import {
  authenticateUser,
  setToken,
} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';

const screen = Dimensions.get('window');

const LoginPage2 = ({navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.userReducer);
  const tokenUrl = `${Constants.tokenUrl}`;

  const [meta, setMeta] = useState();
  
  const onAccessToken = userInfo => {
    setMeta();
    try {
      fetch(tokenUrl)
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setToken(res.data.AccessToken));
            generateCode(res.data.AccessToken,userInfo.username)
            // navigation.navigate('ResetPassword', {
            //     name: 'ResetPassword',
            //     username:userInfo.username,
            //   });
          } else {
            setMeta(signResponse);
          }
        });
    } catch (error) {
      console.error('token error', error);
    } finally {
    }
  };


  const generateCode = (tokenRequest,username) => {
    setMeta();
    try {
      fetch(`${Constants.baseUrl}authentication/forgot/password/users/${username}`,{
        headers: {
          Authorization: `Bearer ${tokenRequest}`,
        },
      },)
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            navigation.navigate('ResetPassword', {
                name: 'ResetPassword',
                username:username,
              });
          } else {
            setMeta(res);
          }
        });
    } catch (error) {
      console.error('token error', error);
    } finally {
    }
  };

  let userInfo = {
    username: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email('invalide Adresse mail')
      .required('Adresse mail obligatoire!'),
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
    navigation.navigate('Login', {
      name: 'Login',
    });
  };
  const goToNext = (userInfo) => {
    navigation.navigate('ResetPassword',userInfo.username, {
      name: 'ResetPassword',
    });
  };

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        userInfo.username = values.username;
        onAccessToken(userInfo);
        // formikActions.resetForm({
        //   values: {
        //     username: '',
        //   },
        // });
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
                  <Text style={[styles.subtitle, {marginBottom: 15}]}>
                    Connexion
                  </Text>

                  <Input
                    placeholder="Identifiant"
                    value={values.username}
                    setValue={handleChange('username')}
                    onBlur={handleBlur('username')}
                    error={errors.username}
                  />
                  <Box mb={5}></Box>
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
                  </Box>
                  {/* <Box style={styles.footerWrapper}>
                  </Box> */}
                  {meta && (
                    <Text color="red.600">{meta.statusDescription}</Text>
                  )}
                </Box>
              </Box>
            </HStack>
        </Box>
      )}
    </Formik>
  );
};

export default LoginPage2;