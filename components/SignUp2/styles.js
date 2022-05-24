import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  formLayout: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: screen.height / 1.7,
  },
  buttonWrapper: {
    ...Platform.select({
      ios: {
        top: screen.height / 50,
      },
      android: {top: screen.height / 150},
    }),
  },
  subtitle: {
    ...Platform.select({
      ios: {
        color: 'black',
        fontSize: screen.height / 32,
        fontWeight: 'bold',
        paddingTop: screen.height / 80,
      },
      android: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: screen.height / 80,
      },
    }),
  },
  imageBackGround: {
    backgroundColor:"#26c69c",
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    borderColor: '#D2C2FF',
    color: '#9B96AB',
    borderBottomWidth: 2,
    fontWeight: '500',
    // lineHeight: 2,
    ...Platform.select({
      ios: {
        height: 30,
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 4,
        paddingBottom: 3,
      },
      android: {
        height: 40,
        // paddingTop: screen.height / 60,
        fontSize: 18,
        paddingBottom: 8,
      },
    }),
  },
});

export default styles;
