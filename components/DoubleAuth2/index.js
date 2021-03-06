import React, {useState, useEffect} from 'react';
import {ImageBackground, Platform} from 'react-native';
import {Box, HStack, Text, Radio, Image, Pressable} from 'native-base';
import Constants from '../../constants/constants';
import Input from '../Shared/Input';
import styles from './styles';
import AuthHeader from '../Shared/AuthHeader';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import {setUser} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

const DoubleAuth2 = ({route, navigation}) => {
  const {authOption} = route.params;
  const [meta, setMeta] = useState();
  const [value, setValue] = React.useState('0');
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  let userInfo = {
    code: '',
  };
  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .trim()
      .min(2, 'invalide Code!')
      .required('Code obligatoire!'),
  });

  const goToPrev = () => {
    navigation.navigate('DoubleAuth1', {
      name: 'DoubleAuth1',
    });
  };

  function onUserConfirmation(code) {
    setMeta();
    try {
      fetch(
        `${Constants.baseUrl}registration/users/confirmation/${user.email}/${code}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            dispatch(setUser({}));
            navigation.navigate('Login', {
              name: 'Login',
            });
          } else {
            setMeta(response);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  const resend = () => {};
  useEffect(() => {
    setValue('0');
  }, []);
  return (
    // <ImageBackground
    //   source={require('../../assets/images/background_green.png')}
    //   style={styles.imageBackGround}>
    <Box
      style={styles.imageBackGround}
    >
      <AuthHeader title="Confirmez" title2=" votre code" />

      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Box style={{width: '90%', alignSelf: 'center'}}>
            <HStack direction="row">
              <Text flex={4} style={[styles.subtitle, {marginBottom: 15}]}>
                Saisir le code re??u
              </Text>
              <Pressable
                mt={6}
                flex={1.5}
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignSelf: 'flex-end',
                  backgroundColor: '#26c69c',
                  margin: 10,
                  opacity: 1,
                }}
                onPress={resend}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '400',
                    fontSize: 16,
                  }}
                  p={2}>
                  renvoyer
                </Text>
              </Pressable>
            </HStack>
            <Formik
              initialValues={userInfo}
              validationSchema={validationSchema}
              onSubmit={(values, formikActions) => {
                userInfo.code = values.code;
                onUserConfirmation(values.code);
                formikActions.resetForm({
                  values: {
                    code: '',
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
                <Box>
                  <Input
                    placeholder="Code"
                    value={values.code}
                    setValue={handleChange('code')}
                    onBlur={handleBlur('code')}
                    error={errors.code}
                  />
                  <Box mb={5}></Box>
                  {meta && <Text color="red.600">{meta.message}</Text>}
                  <Box style={styles.buttonWrapper}>
                    <AuthButtonLayout
                      navigation={navigation}
                      onPress={handleSubmit}
                      title="Pr??c??dent"
                      page="PersonalInfo1"
                      buttonText="Connexion"
                      goToPrev={goToPrev}
                    />
                  </Box>
                </Box>
              )}
            </Formik>
            <Box style={styles.footerWrapper}>
              <Text style={{textAlign: 'center', color: '#26c69c'}}>
                Mot de passe oubli?? ?
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    {/* </ImageBackground> */}
    </Box>
  );
};

export default DoubleAuth2;