import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  inputStyle: {
    ...Platform.select({
      ios: {
        // width: 120,
        alignSelf: 'center',
        // height: 28,
        // borderWidth: 2,
        paddingLeft: 5,
        borderColor: '#D2C2FF',
        color: '#000',
        fontSize: 18,
        // marginVertical: 8,
      },
      android: {
        // borderBottomWidth: 2,
        borderColor: '#D2C2FF',
        paddingTop: screen.height / 150,
        // color: "#9B96AB",
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        // width: 90,
        alignSelf: 'center',
      },
    }),
  },
});

export default styles;
