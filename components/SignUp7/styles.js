import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
  },
  imageBackGround: {
    backgroundColor:"#26c69c",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    justifyContent: "center",
    color: "#b4ce26",
    backgroundColor: "#fff",
    margin: 10,
    opacity: 1,
    paddingRight: 25,
    paddingLeft: 25,
  },
  buttonTextStyle: {
    color: "#b4ce26",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
