import React, { Component } from "react";
import { ImageBackground, Dimensions } from "react-native";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Pressable, HStack, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
const Button = ({ onPress, navigation, text, page }) => {
  return (
    <Pressable
      style={[styles.button]}
      // onPress={() => navigation.navigate(page, { name: text })}
      onPress={onPress}
    >
      <HStack direction="row">
        <Text py={3} style={styles.buttonTextStyle}>
          {text}
        </Text>
        <Icon style={styles.iconStyle} name="arrow-forward-sharp" size={25} />
      </HStack>
    </Pressable>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26c69c",
    margin: 10,
    opacity: 1,
    paddingRight: 25,
    paddingLeft: 25,
    height: 45,
  },
  buttonTextStyle: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconStyle: {
    paddingTop: 9,
    marginLeft: 5,
    color: "#fff",
  },
});
