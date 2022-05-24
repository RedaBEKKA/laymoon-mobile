import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  formLayout: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: screen.height / 1.7,
  },
  footerWrapper: {
    borderTopColor: '#D2C2FF',
    borderTopWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    top: screen.height / 13,
  },
  buttonWrapper: {
    top: screen.height / 15,
  },
  subtitle: {
    ...Platform.select({
      ios: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 19,
        // fontWeight: '600',
        // lineHeight: screen.height / 15,
        // paddingTop: screen.height / 50,
      },
      android: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 19,
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
    ...Platform.select({
      ios: {
        height: 55,
        color: '#9B96AB',
        paddingLeft: 5,
        fontSize: 18,
        marginVertical: 8,
        paddingBottom: 22,
      },
      android: {
        height: 40,
        // paddingTop: screen.height / 60,
        fontSize: 18,
        paddingBottom: 8,
      },
    }),
  },
  container: {
    flex: 1,
  },
});

export default styles;



