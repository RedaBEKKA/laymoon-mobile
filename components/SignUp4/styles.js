import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  info: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#B4CE25',
    fontWeight: 'bold',
  },
  formLayout: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: screen.height / 1.7,
  },
  buttonWrapper: {
    top: screen.height / 10,
  },
  subtitle: {
    color: 'black',
    fontSize: screen.height / 32,
    fontWeight: 'bold',
    paddingTop: screen.height / 50,
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
        height: 39,
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 4,
        paddingBottom: 4,
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
