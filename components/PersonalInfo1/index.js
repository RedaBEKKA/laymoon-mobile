import React from 'react';
import {ImageBackground, Platform, Dimensions} from 'react-native';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import Button from '../Shared/Button';

const PersonalInfo1 = ({route, navigation}) => {
  const {user, token, userData} = route.params;
  return (
    // <ImageBackground
    //   source={require('../../assets/images/background_green.png')}
    //   style={styles.imageBackGround}>
    //   <AuthHeader title="Informations" title2="personnelles" />
    //   <HStack direction="row">
    //     <Box style={styles.formLayout}>
    //       <Box style={{width: '90%', alignSelf: 'center'}}>
    //         <Text style={styles.subtitle}>
    //           Renseignez ce formulaire pour générer un code secret temporaire
    //           qui vous permettra d’accéder à vos services en lignes
    //         </Text>

    //         <Input placeholder="Numéro de client" />
    //         <Input placeholder="Nom" />
    //         <Input placeholder="Prénom" />
    //         <Box width="60%" alignSelf="center" style={styles.buttonWrapper}>
    //           <Button
    //             navigation={navigation}
    //             text=" 1/3 Suivant"
    //             page="PersonalInfo2"
    //           />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </HStack>
    // </ImageBackground>
    <View></View>
  );
};

export default PersonalInfo1;
