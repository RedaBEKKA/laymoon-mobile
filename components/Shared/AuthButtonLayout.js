import React, { Component } from "react";
import { Dimensions } from "react-native";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Box, HStack, Text, Pressable, Image } from "native-base";
import Button from "./Button";
const screen = Dimensions.get("window");
const AuthButtonLayout = ({
  onPress,
  title,
  page,
  buttonText,
  goToPrev,
  navigation,
}) => {
  return (
    <Box style={{ marginTop: 10, flexDirection: "row" }}>
      <Pressable onPress={goToPrev}>
        <Text style={styles.label}>{title}</Text>
      </Pressable>
      <Box flex={2}></Box>
      <Button
        text={buttonText}
        page={page}
        style={{ flex: 2 }}
        navigation={navigation}
        onPress={onPress}
      />
    </Box>
  );
};

export default AuthButtonLayout;

const styles = StyleSheet.create({
  label: {
    flex: 2,
    color: "#6B6B6B",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 18,
  },
});
