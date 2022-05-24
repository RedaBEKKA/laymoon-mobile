import React from 'react';
import {StyleSheet, Platform, Dimensions} from 'react-native';
const SLIDER_WIDTH = Dimensions.get('window').width;
const dimension = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollHeight: {
    height: Platform.select({
      ios: dimension.height / 1.8,
      android: dimension.height / 1.8,
    }), // Prevent a random Android rendering issue
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  labelActive: {
    color: '#6B6B6B',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 20,
    marginTop: 10,
  },

  label: {
    color: '#9B96AB',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 20,
    marginTop: 10,
  },
  imageBackGround: {
    width: '95%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  searchBackGround: {
    width: '96%',
    height: '90%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  iconBackGround: {
    width: '25%',
    height: '25%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },

  copyImg: {
    width: '42%',
    height: '60%',
    position: 'absolute',
    alignItems: 'center',
  },

  profPic: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    alignItems: 'center',
  },

  card1Background: {
    width: '98%',
    height: '98%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card2Background: {
    width: '98%',
    height: '88%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  transferLimit: {
    width: '80%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wallet1: {
    width: '60%',
    height: '100%',
    position: 'absolute',
  },

  profilMenu: {
    width: '20%',
    height: '20%',
    position: 'absolute',
  },

  cardDetailsBtn: {
    width: '88%',
    height: '33%',
    position: 'absolute',
  },

  select: {
    width: '20%',
    height: '36%',
    position: 'absolute',
  },

  monteImg: {
    width: '98%',
    height: '74%',
    position: 'absolute',
  },

  formContainer: {
    position: 'absolute',
    bottom: 300,
    width: '100%',
    zIndex: 2,
  },

  headerWrapper: {
    borderBottomColor: '#D2C2FF',
    borderBottomWidth: 2,
    marginBottom: 20,
  },

  footerWrapper: {
    borderTopColor: '#D2C2FF',
    borderTopWidth: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 18,
    alignSelf: 'auto',
    color: '#9B96AB',
  },

  button: {
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0.5,
    opacity: 1,
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  imageNavBackGround: {
    width: '98%',
    height: '98%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconBackGround: {
    width: 46,
    height: 45,
    position: 'absolute',
    alignItems: 'center',
  },

  navIconBackGroundHome: {
    width: 23,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
  },

  navIconBackGround: {
    width: 35,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
  },
});

export default styles;