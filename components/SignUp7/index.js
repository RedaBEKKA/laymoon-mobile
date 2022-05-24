import React from "react";
import { ImageBackground, Dimensions } from "react-native";
import { Box, HStack, Text, Image, Pressable } from "native-base";
import styles from "./styles";
import Input from "../Shared/Input";
import AuthHeader from "../Shared/AuthHeader";
import Button from "../Shared/Button";
const screen = Dimensions.get("window");
const SignUp7 = ({ navigation }) => {
  return (
    <Box
      style={styles.imageBackGround}
    >
      <Box style={{ top: screen.height / 5, position: "absolute" }}>
        <Text style={[styles.subtitle]}>Liveness</Text>
      </Box>
      <HStack
        direction="row"
        style={{
          top: screen.height / 3,
          position: "absolute",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Box flex={1.5}> </Box>

        <Box flex={3} height={100}>
          <Image
            width={155}
            flex={2}
            alt="Alternate Text"
            source={require("../../assets/images/logo2.png")}
            style={{ alignSelf: "center" }}
          />
        </Box>
        <Box flex={1.5}></Box>
      </HStack>
      <Box style={{ top: screen.height / 2, position: "absolute" }}>
        <Text alignSelf="center" style={[styles.subtitle]}>
          Suivez
        </Text>
        <Text alignSelf="center" style={[styles.subtitle]}>
          instructions
        </Text>
      </Box>
      <Box style={{ top: screen.height / 1.25, position: "absolute" }}>
        <Pressable
          style={[styles.button]}
          onPress={() => navigation.navigate("SignUp8", { name: "SignUp8" })}
        >
          <Text style={styles.buttonTextStyle} py={25}>
            Terminer
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default SignUp7;
