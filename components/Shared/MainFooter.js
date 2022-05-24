import React, { Component } from "react";
import { Dimensions } from "react-native";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Box, HStack, Pressable, Image } from "native-base";
import Button from "./Button";
const screen = Dimensions.get("window");
const MainFooter = ({ navigation }) => {
  return (
    <Box bg="white" p={4}>
      <HStack flexDirection="row">
        <Box flex={1}>
          <Pressable
            alignSelf="center"
            onPress={() => navigation.navigate("Home1", { name: "Home2" })}
          >
            <Image
              mt={1}
              width="6"
              height="7"
              alt="alt"
              source={require("../../assets/images/Home.png")}
            />
          </Pressable>
        </Box>
        <Box flex={1} pb={1}>
          <Pressable
            alignSelf="center"
            onPress={() => navigation.navigate("Status1", { name: "Status1" })}
          >
            <Image
              mt={1}
              width="8"
              height="7"
              alt="alt"
              source={require("../../assets/images/arrowNavbackground.png")}
            />
          </Pressable>
        </Box>
        <Box flex={1}>
          <Pressable
            alignSelf="center"
            onPress={() => navigation.navigate("Card1", { name: "Card1" })}
          >
            <Image
              width="35"
              height="30"
              alt="alt"
              source={require("../../assets/images/cardNavBackground.png")}
            />
          </Pressable>
        </Box>
        <Box flex={1}>
          <Pressable
            alignSelf="center"
            onPress={() =>
              navigation.navigate("Notifications", { name: "Notifications" })
            }
          >
            <Image
              mt={1}
              width="6"
              height="7"
              alt="alt"
              source={require("../../assets/images/listNavBackground.png")}
            />
          </Pressable>
        </Box>
        <Box flex={1}>
          <Pressable
            alignSelf="center"
            onPress={() => navigation.navigate("Chat", { name: "Chat" })}
          >
            <Image
              mt={1}
              width="8"
              height="6"
              alt="alt"
              source={require("../../assets/images/chatNavBackground.png")}
            />
          </Pressable>
        </Box>
      </HStack>
    </Box>
  );
};
export default MainFooter;
