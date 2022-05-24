import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const screen = Dimensions.get('window');


const styles = StyleSheet.create({
    inputStyle: {
        ...Platform.select({
          ios: {
            fontWeight: 'bold',
            alignSelf: 'center',
            //height: 40,
            color: '#000',
            fontSize: 18,
          },
          android: {
            color: '#000',
            fontSize: 18,
            height: 40,
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }),
      },
});

export default styles;
