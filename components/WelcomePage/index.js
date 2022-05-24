import React from "react";
import { ImageBackground, Dimensions } from "react-native";
import { Box, HStack, Text, Image, Pressable } from "native-base";
import styles from "./styles";
import Input from "../Shared/Input";
import AuthHeader from "../Shared/AuthHeader";
import AuthButtonLayout from "../Shared/AuthButtonLayout";
const screen = Dimensions.get("window");

const LoginPage = ({ navigation }) => {
  return (
    // <ImageBackground
    //   source={require("../../assets/images/background_green.png")}
    //   style={styles.imageBackGround}
    // >
    //   <AuthHeader title="Bienvenue" title2=" " />
    //   <HStack direction="row">
    //     <Box style={styles.formLayout}>
    //       <Box style={{ width: "90%", alignSelf: "center" }}>
    //         <Text style={styles.subtitle}>Connexion</Text>

    //         <Input placeholder="Identifiant" />
    //         <Input placeholder="Mot de passe" />
    //         <Box style={styles.buttonWrapper}>
    //           <AuthButtonLayout
    //             navigation={navigation}
    //             title="Précédent"
    //             page="DAuth"
    //             buttonText="Connexion"
    //           />
    //         </Box>
    //         <Box style={styles.footerWrapper}>
    //           <Text style={{ textAlign: "center", color: "#B4CE25" }}>
    //             Mot de passe oublié ?
    //           </Text>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </HStack>
    // </ImageBackground>
    <View></View>
  );
};

export default LoginPage;
