import React from 'react';
import {ImageBackground, Platform, Dimensions} from 'react-native';
import {Box, HStack, Text, Pressable} from 'native-base';
import styles from './styles';
import AuthHeader from '../Shared/AuthHeader';
import {useDispatch} from 'react-redux';
import {
  setUserWalletDetails,
  authenticateUser,
  setToken,
} from '../../actions/user';

const screen = Dimensions.get('window');

const LoginNotification1 = ({navigation}) => {
  const dispatch = useDispatch();
  const goToLogin = () => {
    dispatch(authenticateUser({}));
    dispatch(setToken(''));
    dispatch(setUserWalletDetails({}));
    navigation.navigate('Login', {
      name: 'Login',
    });
  };
  return (
    <Box
      style={styles.imageBackGround}>
      <AuthHeader title="" title2="" />
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
                  fontWeight: '400',
                  fontSize: 17,
                }}
                p={2}>
                Fermer
              </Text>
            </HStack>
          </Pressable>
          <Box style={{width: '90%', alignSelf: 'center'}}>
            <Text style={[styles.subtitle, {marginBottom: 15}]}></Text>

            <Box mt={20} style={{width: '90%', alignSelf: 'center'}}>
              <Text textAlign={'center'}>
                Les documents sont en cours de vérification
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default LoginNotification1;