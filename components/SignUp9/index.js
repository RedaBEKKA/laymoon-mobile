import React from "react";
import { ImageBackground, Dimensions } from "react-native";
import { Box, HStack, Text, Image, Pressable } from "native-base";
import styles from "./styles";
import Input from "../Shared/Input";
import AuthHeader from "../Shared/AuthHeader";
import Button from "../Shared/Button";
import LogoLayout from "../Shared/LogoLayout";
import AuthButtonLayout from "../Shared/AuthButtonLayout";
const screen = Dimensions.get("window");

const SignUp9 = ({ navigation }) => {
  return (
    <Box
      style={styles.imageBackGround}
    >
      <AuthHeader title="Mieux vous" title2="connaitre" />
      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Box style={{ width: "90%", alignSelf: "center" }}>
            <Text py={15} style={styles.subtitle}>
              Félicitations!
            </Text>

            <Text>
              Nous faisons quelques vérifications et votre compte devrait être
              prêt. Vous pouvez dès à présent vous connecter sur votre espace
              pour effectuer votre premier virement.
            </Text>
            <Text py={15}>
              Votre carte arrive, le temps de la personnaliser et de l’activer
              nous vous la faisons parvenir. Dans 48-72h elle sera dans votre
              boite aux lettre.
            </Text>
          </Box>
          <Box width="50%" alignSelf="center" style={styles.buttonWrapper}>
            <Pressable
              style={[styles.button]}
              onPress={() => navigation.navigate("Home1", { name: "Home1" })}
            >
              <Text py={15} style={styles.buttonTextStyle}>
                Je me connecte
              </Text>
            </Pressable>
          </Box>
        </Box>
      </HStack>
      <Box p={screen.height / 5} width="100%" bg={"white"}></Box>
    </Box>
  );
};

export default SignUp9;
