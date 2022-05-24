import React, {Component} from 'react';
import {Box, HStack, Text, Image, Pressable} from 'native-base';
import {TextInput, StyleSheet, TextInputProps, Dimensions} from 'react-native';
const screen = Dimensions.get('window');
const Input = ({
  error,
  value,
  placeholder,
  setValue,
  secureTextEntry,
  onBlur,
}) => {
  return (
    <Box>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#9B96AB"
        onBlur={onBlur}
        style={[styles.inputStyle]}
      />
      <Text color="red.600" fontSize={12}>
        {error}
      </Text>
    </Box>
  );
};

export default Input;
const styles = StyleSheet.create({
  inputStyle: {
    borderColor: '#D2C2FF',
    color: '#9B96AB',
    borderBottomWidth: 2,
    fontWeight: '500',
    // lineHeight: 2,
    ...Platform.select({
      ios: {
        height: 35,
        paddingLeft: 5,
        fontSize: 16,
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
