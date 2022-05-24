import React from 'react';
import {ImageBackground, Platform, Dimensions} from 'react-native';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import Button from '../Shared/Button';

const PersonalInfo2 = ({route, navigation}) => {
  const {user, token} = route.params;
  return (
    // <ImageBackground
    //   source={require('../../assets/images/background_green.png')}
    //   style={styles.imageBackGround}>
    //   <AuthHeader title="Informations" title2="personnelles" />
    //   <HStack direction="row">
    //     <Box style={styles.formLayout}>
    //       <Box mt={9} style={{width: '90%', alignSelf: 'center'}}>
    //         <Text style={styles.subtitle}>
    //           Question de récupération de compte :
    //         </Text>
    //         <Text mb={10} style={styles.subtitle}>
    //           Quel est le nom de jeune de fille de votre mère ?
    //         </Text>
    //         <Input placeholder="Réponse" />
    //         <Box width="60%" alignSelf="center" style={styles.buttonWrapper}>
    //           <Button
    //             navigation={navigation}
    //             text=" 2/3 Suivant"
    //             page="PersonalInfo3"
    //           />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </HStack>
    // </ImageBackground>
    <View></View>
  );
};

export default PersonalInfo2;
