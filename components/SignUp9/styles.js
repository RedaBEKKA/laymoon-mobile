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
    fontSize: screen.height / 32,
    fontWeight: "bold",
    paddingTop: screen.height / 50,
  },

  imageBackGround: {
    backgroundColor:"#26c69c",
    resizeMode: "cover",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b4ce26",
    margin: 10,
    opacity: 1,
    paddingRight: 25,
    paddingLeft: 25,
  },
  buttonTextStyle: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonWrapper: {
    top: screen.height / 5.5,
  },
});


export default styles;
