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

const DoubleAuth1 = ({route, navigation}) => {
  const [meta, setMeta] = useState();
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = React.useState([]);
  let [listLoading, setlistLoading] = useState(true);
  const [authOption, setAuthOption] = React.useState('1');
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let request = {destinationIdentity: user.mobile};
    if (authOption === '1') request.destinationIdentity = user.email;
    generateSmsOtp(request);
  };

  const goToNext = () => {
    navigation.navigate('DoubleAuth2', {
      name: 'DoubleAuth2',
      authOption: authOption,
    });
  };

  const goToPrev = () => {
    navigation.navigate('Login', {
      name: 'Login',
    });
  };

  const generateSmsOtp = request => {
    setListData([]);
    try {
      fetch(`${Constants.baseUrl}authentication/send-otp-message/users`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            goToNext();
          } else if (res.status == 'error') {
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
          } else if (res.status == 'Error') {
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

  const getUserById = () => {
    try {
      setLoading(false);
      fetch(`${Constants.baseUrl}users/${sessionStorage.userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setUser(res.data.users));
            setLoading(true);
          }
        })
        .catch(error => {
          console.warn('Get User Error', error);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getUserById();
  }, []);
  return (
    // <ImageBackground
    //   source={require('../../assets/images/background_green.png')}
    //   style={styles.imageBackGround}>
         <Box
      style={styles.imageBackGround}
    >
      <AuthHeader title="Confirmez" title2="votre code" />

      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Box style={{width: '90%', alignSelf: 'center'}}>
            <Box>
              {loading && (
                <Box
                  bg="white"
                  borderRadius={15}
                  p={2}
                  height={130}
                  borderWidth={2}
                  borderColor="#f7f4ff"
                  width="100%"
                  mt={35}>
                  <Text style={[styles.subtitle, {marginBottom: 5}]}>
                    Recevoir le code
                  </Text>
                  <Radio.Group
                    name="doubleauth"
                    value={authOption}
                    onChange={nextValue => {
                      setAuthOption(nextValue);
                    }}>
                    <Radio value="0">SMS {user.mobile}</Radio>
                    <Radio value="1">Email {user.email} </Radio>
                  </Radio.Group>
                </Box>
              )}
              <Box mb={5}></Box>
              {meta && <Text color="red.600">{meta.message}</Text>}
              <Box style={styles.buttonWrapper}>
                <AuthButtonLayout
                  navigation={navigation}
                  onPress={handleSubmit}
                  title="Précédent"
                  page="PersonalInfo1"
                  buttonText="Connexion"
                  goToPrev={goToPrev}
                />
              </Box>
            </Box>
            <Box style={styles.footerWrapper}>
              <Text style={{textAlign: 'center', color: '#26c69c'}}>
                Mot de passe oublié ?
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack></Box>
    // </ImageBackground>
  );
};

export default DoubleAuth1;