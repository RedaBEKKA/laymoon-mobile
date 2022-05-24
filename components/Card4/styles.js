import React from 'react';
import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const styles = StyleSheet.create({
  buttonStyle: {
    color: '#9B96AB',
    // fontSize: 22,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    // marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 100,
    height: screenWidth / 2.45,
  },
  title: {
    paddingLeft: 20,
    color: 'white',
    position: 'absolute',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  scrollHeight: {
    height: Platform.select({
      ios: SLIDER_WIDTH / 1.12,
      android: SLIDER_WIDTH / 1.5,
    }), // Prevent a random Android rendering issue
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default styles;