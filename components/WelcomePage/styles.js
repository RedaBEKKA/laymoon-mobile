import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  formLayout: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: screen.height / 1.7,
  },
  footerWrapper: {
    borderTopColor: "#D2C2FF",
    borderTopWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    top: screen.height / 4.5,
  },
  buttonWrapper: {
    top: screen.height / 4.5,
  },
  subtitle: {
    color: "black",
    fontSize: screen.height / 32,
    fontWeight: "bold",
    paddingTop: screen.height / 50,
  },
  imageBackGround: {
    resizeMode: "cover",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
