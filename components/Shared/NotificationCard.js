import React, { Component } from "react";
import { Dimensions } from "react-native";
import { TextInput, StyleSheet,TouchableOpacity, TextInputProps } from "react-native";
import { Box, Text, HStack, Pressable, Image } from "native-base";
import {setUser,setProfile,setNotifications} from '../../actions/user';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';

const screen = Dimensions.get("window");
const NotificationCard = ({ navigation, amount, color, textColor,item }) => {

  let bcColor ="#ebf2c4"
  if(item.isRead){
    bcColor ="#ebf2c4"
  }
  else{ bcColor ="white"}
  const date = getParsedDate(item.createdAt);
  function getParsedDate(date){
    date = String(date).split(' ');
    const days = String(date[0]).split('-');
    return parseInt(days[0])+'-'+ parseInt(days[1])+'-'+parseInt(days[2]);
  }
  return (
    <Box bg="white" p={2} bg={bcColor} mb={2}>
      <HStack flexDirection="row">
      {/* <TouchableOpacity onPress={()=>updateNotificationStatus(item.eventNotificationId)}> */}
        <Box flex={8}>
          <Text fontSize="16" fontWeight="bold">
          {item.description}
          </Text>
        </Box>
        <Box flex={3.5}>
          <Text fontSize="18" color={textColor} fontWeight="bold">
            {item.metaData.amount}€
          </Text>
        </Box>
        {/* </TouchableOpacity> */}
      </HStack>
      <Text fontSize="xs" pt={3}>
       {date}
      </Text>
    </Box>
  );
};

export default NotificationCard;
