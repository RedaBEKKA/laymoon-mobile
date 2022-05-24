import React, { Component } from "react";
import { ImageBackground, Dimensions } from "react-native";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Box, HStack, Text, Image } from "native-base";
import LogoLayout from "./LogoLayout";
const screen = Dimensions.get("window");
const AuthHeader = ({ title, title2, height }) => {
  return (
    <Box height={height}>
      <Box style={styles.logoLayout}></Box>
      <LogoLayout />
      <Box style={styles.welcomeBlockLayout}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{title2}</Text>
      </Box>
      <HStack direction="row" style={{ width: "90%", alignSelf: "center" }}>
        <Box flex={2}></Box>
        <Box flex={2}>
          <Image
            style={{ alignSelf: "flex-start" }}
            alt="Alternate Text"
            source={require("../../assets/images/circleElement.png")}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default AuthHeader;
const styles = StyleSheet.create({
  logoLayout: {
    ...Platform.select({
      ios: {
        paddingTop: screen.height / 16,
      },
      android: {
        paddingTop: screen.height / 17,
      },
    }),
  },
  welcomeBlockLayout: {
    ...Platform.select({
      ios: {
        paddingTop: screen.height / 30,
      },
      android: {
        width: "90%",
        height: screen.height / 6,
        paddingTop: screen.height / 40,
      },
    }),
  },
  title: {
    color: "white",
    fontSize: screen.height / 17,
    lineHeight: screen.height / 17,
    fontWeight: "700",
  },
});
