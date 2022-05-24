import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  info: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#B4CE25",
    fontWeight: "bold",
  },
  formLayout: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: screen.height / 1.7,
  },
  buttonWrapper: {
    top: screen.height / 30,
  },
  subtitle: {
    ...Platform.select({
      ios: {
        color: "black",
        fontSize: screen.height / 32,
        fontWeight: "bold",
        paddingTop: screen.height / 50,
      },
      android: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        paddingTop: screen.height / 50,
      },
    }),
  },

  imageBackGround: {
    backgroundColor:"#26c69c",
    resizeMode: "cover",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
