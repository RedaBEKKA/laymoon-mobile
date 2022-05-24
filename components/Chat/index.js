import React, {useRef, useState, useEffect} from 'react';
import {Dimensions,FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Box, Text, Image, HStack, Pressable, ScrollView} from 'native-base';
import MainFooter from '../Shared/MainFooter';
import Icon from 'react-native-vector-icons/Ionicons';
import {setChannels, setMessages} from '../../actions/chat';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../constants/constants';
const screen = Dimensions.get('window');



const Chat = ({route, navigation}) => {
  let DATA=[];
  const dispatch = useDispatch();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {channels} = useSelector(state => state.chatReducer);
  const getChannels = () => {
    try {
      fetch(`${Constants.baseUrl}channels/${sessionStorage.userId}/users`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            if(response.data.channels.length >0){
              dispatch(setChannels(response.data.channels))
            }
          }
        });
    } catch (error) {
      console.warn("channel error",error);
    } finally {
    }
  };

  function getParsedDate(date){
    date = String(date).split(' ');
    const days = String(date[0]).split('-');
    return parseInt(days[0])+'-'+ parseInt(days[1])+'-'+parseInt(days[2]);
  }

  const goToMessages=(channelId)=>{
      navigation.navigate('Chat2', {name: 'Chat2',channel:channels.find(x=>x.channelId ==channelId)})
  }
  
  useEffect(() => {
    dispatch(setMessages([]))
    getChannels();
  }, []);
  return (
    <Box   
    bg="#fcfcfc"
    style={{
      height: Platform.select({
        ios: screen.height,
        android: screen.height + 10,
      }),
    }}>
      <Box pt={10} px={6}>
        <HStack direction="row">
          <Box flex={5} mt={25}>
            <Text fontWeight="bold" fontSize="3xl">
              All requests
            </Text>
          </Box>
          <Box flex={1}>
          </Box>
        </HStack>
        <TouchableOpacity onPress={()=>navigation.navigate('Chat3', {name: 'Chat3'})}>
           <HStack direction="row" bg="white" pb="5" pt="5">
  
          <Box flex={1}>
            <Icon size={24} name="chatbubble" color="#0047AB" />
            </Box>
             <Text flex={8} fontSize={18}fontWeight={600}>New chat</Text>
        </HStack>
        </TouchableOpacity>
        <Text mb={5}mt={5} fontSize={16}fontWeight={400}>Resolved</Text>
        <Box>
        </Box>
        
        <FlatList height={screen.height/1.9}
        data={channels}
        renderItem={({item}) => { 
          const date = getParsedDate(item.createdAt);
          return (
                  <TouchableOpacity onPress={()=>goToMessages(item.channelId)}>
                  <Box>
                    <HStack direction="row">
                      <Icon size={24} name="checkmark-circle-sharp" color="#008000" />
                      <Text  flex={8} fontSize={14}fontWeight={400}> {item.subject}</Text>
                      <Text flex={3.5} >{date}</Text>
                      </HStack>
                    <HStack direction="row">
                      <Box  flex={1}></Box>
                      <Text flex={8} fontSize={14} paddingRight={2}>
                      </Text>
                    </HStack>
                  </Box>
                  </TouchableOpacity> );
              }}
              keyExtractor={item => item.channelId.toString()}
            />
            
      </Box>
   
      <Box
          style={{
            width: '100%',
            position: 'absolute',
            bottom: Platform.select({ios: 2, android: 0}),
          }}>
          <Box
            bg="white"
            p={4}
            shadow={2}
            style={{
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}>
            <HStack flexDirection="row">
              <Box flex={1}>
                <Pressable
                  alignSelf="center"
                  onPress={() => navigation.navigate('Home1', {name: 'Home1'})}>
                  <Image
                    mt={1}
                    width="6"
                    height="7"
                    alt="alt"
                    source={require('../../assets/images/home_grey.png')}
                  />
                </Pressable>
              </Box>
              <Box flex={1} pb={1}>
                <Pressable
                  alignSelf="center"
                  onPress={() =>
                    navigation.navigate('Status1', {name: 'Status1'})
                  }>
                  <Image
                    mt={1}
                    width="8"
                    height="7"
                    alt="alt"
                    source={require('../../assets/images/arrowNavbackground.png')}
                  />
                </Pressable>
              </Box>
              <Box flex={1}>
                <Pressable
                  alignSelf="center"
                  onPress={() => navigation.navigate('Card1', {name: 'Card1'})}>
                  <Image
                    width="35"
                    height="30"
                    alt="alt"
                    source={require('../../assets/images/cardNavBackground.png')}
                  />
                </Pressable>
              </Box>
              <Box flex={1}>
                <Pressable
                  alignSelf="center"
                  onPress={() => navigation.navigate('Card4', {name: 'Card4'})}>
                  <Image
                    mt={1}
                    width="6"
                    height="7"
                    alt="alt"
                    source={require('../../assets/images/listNavBackground.png')}
                  />
                </Pressable>
              </Box>
              <Box flex={1}>
                <Pressable
                  alignSelf="center"
                  onPress={() => navigation.navigate('Chat2', {name: 'Chat2'})}>
                  <Image
                    mt={1}
                    width="8"
                    height="6"
                    alt="alt"
                    source={require('../../assets/images/chat_green.png')}
                  />
                </Pressable>
              </Box>
            </HStack>
          </Box>
        </Box>
    </Box>
  );
};

export default Chat;