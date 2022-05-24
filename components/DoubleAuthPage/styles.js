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
    top: screen.height / 11,
  },
  buttonWrapper: {
    top: screen.height / 11,
  },

  subtitle: {
    ...Platform.select({
      ios: {
        color: "black",
        fontSize: screen.height / 32,
        fontWeight: "600",
        lineHeight: screen.height / 15,
        // paddingTop: screen.height / 50,
      },
      android: {
        color: "black",
        fontSize: screen.height / 25,
        fontWeight: "700",
        lineHeight: screen.height / 10,
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