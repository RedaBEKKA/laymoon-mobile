import React from 'react';
import {ImageBackground, Platform, Dimensions} from 'react-native';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import Button from '../Shared/Button';

const PersonalInfo3 = ({route, navigation}) => {
  const {user, token} = route.params;
  return (
    // <ImageBackground
    //   source={require('../../assets/images/background_green.png')}
    //   style={styles.imageBackGround}>
    //   <AuthHeader title="Informations" title2="personnelles" />
    //   <HStack direction="row">
    //     <Box style={styles.formLayout}>
    //       <Box style={{width: '90%', alignSelf: 'center'}}>
    //         <Text style={styles.subtitle}>Choisir un nouveau mot de passe</Text>
    //         <Input placeholder="Nouveau mot de passe" />
    //         <Input placeholder="Ressaisissez le nouveau mot de passe " />
    //         <Box width="60%" alignSelf="center" style={styles.buttonWrapper}>
    //           <Button
    //             navigation={navigation}
    //             text=" 3/3 Terminer"
    //             page="SignUp1"
    //           />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </HStack>
    // </ImageBackground>
    <View></View>
  );
};

export default PersonalInfo3;
