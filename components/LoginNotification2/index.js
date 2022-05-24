import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from 'react-native';
import {Box, HStack, Text, Pressable} from 'native-base';
import styles from './styles';
import AuthHeader from '../Shared/AuthHeader';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-community/clipboard';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
import {
  setUserWalletDetails,
  authenticateUser,
  setToken,
} from '../../actions/user';
const screen = Dimensions.get('window');

const LoginNotification2 = ({navigation}) => {
  const [copiedText, setCopiedText] = useState('');
  const dispatch = useDispatch();
  const {sessionStorage, token, walletDetails} = useSelector(
    state => state.userReducer,
  );

  const copyToClipboard = data => {
    Alert.alert('copied');
    Clipboard.setString(data);
  };

  const fetchCopiedText = async () => {

    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  const goToLogin = () => {
    dispatch(authenticateUser({}));
    dispatch(setToken(''));
    dispatch(setUserWalletDetails({}));
    navigation.navigate('Landing', {
      name: 'Landing',
    });
  };

  const getWallets = () => {
    try {
      fetch(`${Constants.baseUrl}wallets?userId=${sessionStorage.userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          //console.log("wallet resp",response.StatusDescription.errors)
          if (response.status == 'success') {
            console.log("wallet resp",response)
            response.data.wallets.forEach(w => {
              if (w.walletTag == 'MAIN') dispatch(setUserWalletDetails(w));
            });
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  let openShareDialogAsync = async () => {
    // console.log("iban share", cardDet.iban);
    await Sharing.shareAsync('iban share');
    try {
      Share.open(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getWallets();
  }, []);
  return (
    <Box
      style={styles.imageBackGround}>
      <AuthHeader title="Derniere étape" title2="Virement de 20€*" />
      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Pressable
            mt={6}
            style={{
              borderRadius: 10,
              justifyContent: 'center',
              textAlign: 'center',
              alignSelf: 'flex-end',
              backgroundColor: '#26c69c',
              margin: 4,
              opacity: 1,
            }}
            onPress={goToLogin}>
            <HStack direction="row">
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 18,
                }}
                p={2}>
                Fermer
              </Text>
            </HStack>
          </Pressable>
          <Box style={{width: '90%', alignSelf: 'center'}}>
            <Text mt={8} style={[styles.subtitle, {marginBottom: 4}]}>Afin d’activer votre compte et de recevoir votre carte Laymoon qui vous sera envoyé par courrier, pouvez vous effectuer un virement d un minimum de 20 € sur le compte ci dessous: </Text>

            <Box mt={10}>
              <HStack flexDirection="row" alignSelf="center">
                <Box flex={5}>
                  <Text
                    style={{
                      textAlign: 'left',
                    }}
                    mb={25}
                    fontSize="18"
                    fontWeight="500"
                    color={'#9B96AB'}>
                    IBAN
                  </Text>
                </Box>
                <Text fontSize="18"
                    fontWeight="500" flex={16}>{walletDetails.iban}</Text>

                <Box flex={2}>
                  <TouchableOpacity
                    onPress={() => copyToClipboard(walletDetails.iban)}>
                    <Icon size={28} name="copy" color="#C4C4C4" />
                  </TouchableOpacity>
                </Box>
              </HStack>

              <HStack flexDirection="row" alignSelf="center">
                <Box flex={5}>
                  <Text
                    style={{
                      textAlign: 'left',
                    }}
                    mb={3}
                    fontSize="18"
                    fontWeight="500"
                    color={'#9B96AB'}>
                    BIC
                  </Text>
                </Box>
                <Text  fontSize="18"
                    fontWeight="500" flex={16} textAlign={'center'}>
                  {walletDetails.bic}
                </Text>

                <Box flex={2}>
                  <TouchableOpacity
                    onPress={() => copyToClipboard(walletDetails.bic)}>
                    <Icon name="copy" size={28} color="#C4C4C4" />
                  </TouchableOpacity>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default LoginNotification2;