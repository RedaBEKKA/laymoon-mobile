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
  // buttonWrapper: {
  //   ...Platform.select({
  //     ios: {
  //       top: screen.height / 12,
  //     },
  //     android: { top: screen.height / 35 },
  //   }),
  // },
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
  inputStyle: {
    ...Platform.select({
      ios: {
        height: 40,
        borderBottomWidth: 2,
        paddingLeft: 5,
        borderColor: "#D2C2FF",
        color: "#9B96AB",
        fontSize: 18,
        marginVertical: 8,
      },
      android: {
        borderBottomWidth: 2,
        borderColor: "#D2C2FF",
        paddingTop: screen.height / 50,
        color: "#9B96AB",
        fontSize: 18,
      },
    }),
  },
});

export default styles;
