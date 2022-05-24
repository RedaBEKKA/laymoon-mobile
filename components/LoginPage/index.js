import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  TextInput,
  Keyboard,
  Platform,Linking
} from 'react-native';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import {WebView} from 'react-native-webview';
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
  setUserWalletDetails,
  authenticateUser,
  setToken,
} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';

const screen = Dimensions.get('window');

const LoginPage = ({navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [formView, setFormView] = useState(true);
  const [kycCommentView, setKycCommentView] = useState(false);
  const [kycComment, setKycComment] = useState('');
  const [kycComment2, setKycComment2] = useState('');
  const [kycUrl, setKycUrl] = useState('');
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.userReducer);
  const [kycUrlProcessing, setkycUrlProcessing] = useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const tokenUrl = `${Constants.tokenUrl}`;

  const [meta, setMeta] = useState();
  
  const UserWebView = () => {
    console.log("kycurl",kycUrlProcessing)
    return (
      <WebView
        originWhitelist={['*']}
        source={{
          html:
            '<iframe width="100%" height="' +
            screen.height +
            '" src=' +
            kycUrlProcessing +
            ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        }}
      />
    );
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
    try {setKycComment('');
      setKycComment2('');
    setKycCommentView(false)
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
            if (signResponse.data.kycResponseStatus === 'NONE') {
              setFormView(false);
              setKycCommentView(false);
              setkycUrlProcessing(signResponse.data.kycUrlProcessing);
            } else   if (signResponse.data.kycResponseStatus === 'REFUSED' ||signResponse.data.kycResponseStatus === 'WRONG' || signResponse.data.kycResponseStatus === 'REJECTED') {
              setKycCommentView(true)
              setKycComment(signResponse.data.kycResponseStatus)
              setKycComment2(signResponse.data.comment)
              setKycUrl(signResponse.data.kycUrlProcessing)
              setFormView(false);
              setkycUrlProcessing(signResponse.data.kycUrlProcessing);
            } else if (
              !signResponse.isFistLogin &&
              signResponse.data.kycResponseStatus === 'VALIDATED'
            ) {
              navigation.navigate('Home1', {name: 'Home1'});
            } else if (signResponse.data.kycResponseStatus === 'PENDING') {
              navigation.navigate('LoginNotification2', {
                name: 'LoginNotification2',
              });
            } else if (
              signResponse.isFistLogin &&
              signResponse.data.kycResponseStatus === 'VALIDATED'
            ) {
              navigation.navigate('DoubleAuth1', {
                name: 'DoubleAuth1',
              });
            }
          } else {
            setMeta(signResponse);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const openURL = () => {
    Linking.openURL(kycUrlProcessing).catch((err) => console.error('An error occurred', err));
  }

  const closeIframe = () => {
    // setFormView(true);
    dispatch(authenticateUser({}));
    dispatch(setToken(''));
    dispatch(setUserWalletDetails({}));
    navigation.navigate('Landing', {
      name: 'Landing',
    });
  };

  let userInfo = {
    password: '',
    username: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .trim()
      .min(8, 'le mot de passe est trop tiré!')
      .required('Mot de passe required!'),
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
    navigation.navigate('Landing', {
      name: 'Landing',
    });
  };

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        userInfo.password = values.password;
        userInfo.username = values.username;
        onAccessToken(userInfo);
        formikActions.resetForm({
          values: {
            password: '',
            username: '',
          },
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <Box
          style={styles.imageBackGround}>
          {formView && (
            <AuthHeader
              height={headerHeight}
              title="Content de te"
              title2="revoir"
            />
          )}
          {formView ? (
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
                  <HStack direction="row">
                    <Box flex={9} style={{height: 40}}>
                      <TextInput
                        value={values.password}
                        placeholder="Mot de passe"
                        placeholderTextColor="#9B96AB"
                        onChangeText={handleChange('password')}
                        secureTextEntry={passwordVisibility}
                        // passwordVisibility={passwordVisibility}
                        onBlur={handleBlur('password')}
                        style={[styles.inputStyle]}
                      />
                    </Box>
                    <Box style={[styles.inputStyle,{paddingBottom:10}]} flex={1}>
                      <Pressable onPress={handlePasswordVisibility}>
                        <Icon name={rightIcon} color="#26c69c" size={25} />
                      </Pressable>
                    </Box>
                  </HStack>
                  <Text color="red.600">{errors.password}</Text>
                  {meta && (
                    <Text color="red.600">{meta.StatusDescription}</Text>
                  )}
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
                  <Box style={styles.footerWrapper}>
                   <Pressable onPress={()=>navigation.navigate('LoginPage2', {name: 'LoginPage2', })}> 
                   <Text style={{textAlign: 'center', color: '#26c69c'}}>
                      Mot de passe oublié ?
                    </Text></Pressable>
                  </Box>
                </Box>
              </Box>
            </HStack>
          ) : (
            <Box
              style={{
                height: screen.height / 1,
                marginTop: 45,
                width: screen.width,
                backgroundColor: 'white',
              }}>
            <Pressable
                mt={6}
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignSelf: 'flex-end',
                  backgroundColor: '#26c69c',
                  margin: 10,
                  opacity: 1,
                }}
                onPress={closeIframe}>
                <HStack direction="row">
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '400',
                      fontSize: 17,
                    }}
                    p={2}>
                    Fermer
                  </Text>
                </HStack>
              </Pressable>
            {kycCommentView &&(
              <Box mt={2}mb={4} fontSize="18" alignSelf={"center"} fontWeight="bold" width={"90%"}>
             <Image width={"65"} alignSelf={"center"} height={"78"}
                alt="icon"
                source={require('../../assets/images/waiting.png')}
              />
                <Text fontSize={24} mt={5} mb={5} lineHeight={24} textAlign={"center"} fontWeight={"bold"}>votre inscription est en cours de traitement</Text>
                <Text mb={5}>les verification de vos informations peuvent prendre jusqu'à quelques heures avant que votre compte soit activé. veuillez revenir plus tard.</Text>
                {/* <Text mb={4}>{kycComment2} : {kycComment}</Text> */}
                <Pressable onPress={openURL} alignSelf="center" width="40%">
                  <Text py={1} bg="#26c69c" textAlign={"center"} fontWeight={"bold"} fontSize={18} color={"white"}>Retry</Text>
                  </Pressable>
                </Box>
            )}  
              {!kycCommentView && (<UserWebView />)}
            </Box>
          )}
        </Box>
      )}
    </Formik>
  );
};

export default LoginPage;