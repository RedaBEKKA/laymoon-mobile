import React from "react";
import { StyleSheet, Platform, Dimensions } from "react-native";
const SLIDER_WIDTH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollHeight: {
    height: Platform.select({
      ios: SLIDER_WIDTH / 1.6,
      android: SLIDER_WIDTH / 1.8,
    }), // Prevent a random Android rendering issue
  },
});

export default styles;
