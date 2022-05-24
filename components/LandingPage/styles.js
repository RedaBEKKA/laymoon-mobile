import React from 'react';
import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  sipaContainer: {
    width: '100%',
    height: '100%',
  },

  titles: {
    color: 'white',
    width: '80%',
  },

  title: {
    color: 'white',
    fontSize: SLIDER_WIDTH / 10,
    fontWeight: 'bold',
  },

  subtitle: {
    flex: 1,
  },

  text: {
    color: '#26c69c',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  text2: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  imageBackGround: {
    backgroundColor:"#26c69c",
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: '20%',
    width: '100%',
    padding: 10,
  },

  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0.5,
    marginTop: 10,
  },
  button2: {
    alignSelf: 'center',
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0.5,
    marginTop: 10,
  },

  header: {
    fontSize: 18,
    alignSelf: 'auto',
    color: '#9B96AB',
  },

  headerWrapper: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});

export default styles;
