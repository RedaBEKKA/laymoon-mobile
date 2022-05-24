import React, { Component } from "react";
import { ImageBackground, Dimensions } from "react-native";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Box, HStack, Text, Image } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
const LogoLayout = () => {
  return (
    <HStack direction="row" style={{ width: "90%", alignSelf: "center" }}>
      <Box py={5} flex={1.5}>
        <Image
          width={60}
          style={{ alignSelf: "center" }}
          alt="Alternate Text"
          source={require("../../assets/images/wave1.png")}
        />
      </Box>

      <Box flex={3} height={100}>
        <Image
          width={145}
          flex={2}
          alt="Alternate Text"
          source={require("../../assets/images/logo.png")}
          style={{ alignSelf: "center" }}
        />
      </Box>
      <Box flex={1.5}></Box>
    </HStack>
  );
};

export default LogoLayout;
const styles = StyleSheet.create({
  styleA: {
    paddingTop: 20,
  },
});
