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
  subtitle: {
    color: "black",
    fontSize: screen.height / 35,
    fontWeight: "bold",
    paddingTop: screen.height / 50,
  },
  // buttonWrapper: {
  //   top: screen.height / 8,
  // },
  imageBackGround: {
    backgroundColor:"#26c69c",
    resizeMode: "cover",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
