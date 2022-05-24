import React, {useRef, useState, useEffect} from 'react';
import {Dimensions,FlatList,
    Keyboard, View,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Box, Text, Image, HStack, Pressable, ScrollView} from 'native-base';
import MainFooter from '../Shared/MainFooter';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatBot from 'react-native-chatbot';
import {setMessages} from '../../actions/chat';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../constants/constants';
const screen = Dimensions.get('window');



const Chat2 = ({route, navigation}) => {
    const {channel} = route.params;
  let [chatMessage, setChatMessage] = useState("");
  const [headerHeight, setHeaderHeight] = useState(screen.height/1.4);
  let DATA=[];
  const dispatch = useDispatch();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {messages} = useSelector(state => state.chatReducer);

  const goBack =()=>{
    navigation.navigate('Chat', {name: 'Chat'})
  }
  const getMessages = () => {
    try {
      fetch(`${Constants.baseUrl}messages/${channel.channelId}/channels`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            DATA=[];
            if(response.data.messages.length > 0){
              response.data.messages.forEach(m=>{
                  m.message=m.body;
              DATA.push(m)
              })
              dispatch(setMessages(DATA))
            }
          }
        });
    } catch (error) {
      console.warn("messages error",error);
    } finally {
    }
  };

  const createMessage = () => {
    try {
      fetch(`${Constants.baseUrl}messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
     },
        body: JSON.stringify({channelId:channel.channelId,
        author:sessionStorage.userId,
          body:chatMessage}),
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            setChatMessage("");
            getMessages();
          }
        });
    } catch (error) {
      console.warn("messages error",error);
    } finally {
    }
  };
  
  useEffect(() => {
    getMessages();
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setHeaderHeight(screen.height/2.2);
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setHeaderHeight(screen.height/1.4);
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
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
        <HStack direction="row" mt={2}>
          <Box flex={2}>
          <TouchableOpacity onPress={()=>goBack()}>
            <Icon size={24} name="arrow-back" color="#000" />
            </TouchableOpacity>
          </Box>
          <Box flex={8} >
            <Text fontWeight="400" fontSize="14">
              {channel.subject}
            </Text>
          </Box>
          <Box flex={2} >
            <Text fontWeight="bold" fontSize="2xl">
              Chat 
            </Text>
          </Box>
          {/* <Box flex={1}>
            <Pressable
              alignSelf="center"
              onPress={() => navigation.navigate('FAQ', {name: 'FAQ'})}>
              <Image
                alt="icon"
                source={require('../../assets/images/chatImg.png')}
              />
            </Pressable>
          </Box> */}
        </HStack>
  

      <View style={{height:headerHeight,backgroundColor:"#F6F6F6",paddingTop:15}}>
        <ScrollView style={{height: screen.height / 1.8}}>
                {messages.map(chatMessage => {
                    let float ="flex-end",bgColor="blue.100",textColor="black"
                    if(chatMessage.author == sessionStorage.userId ){
                    float="flex-end";bgColor="blue.100";textColor="blue.500"
                    }else{
                    float="flex-start";bgColor="white";textColor="black"}
                  return <Box  style={{alignItems:float, }}>
            <Text p="3" mb={2}mr={2}ml={2} borderRadius={5} bg={bgColor} textColor={textColor} key={chatMessage.messageId} style={{maxWidth:"90%"}}>
                {chatMessage.body}
                </Text>
            </Box>
          })}
        </ScrollView>
        <HStack direction="row" style={{ position: 'absolute', bottom: Platform.select({ios: 2, android: 0})}} >
        <TextInput flex={6}
          style={{ height: 40, borderWidth: 2 ,borderRightWidth:0,borderColor:"gray" }}
          autoCorrect={false}
          value={chatMessage}
          onChangeText={chatMessage => {
            setChatMessage(chatMessage);
          }}
        />
        <TouchableOpacity onPress={()=>{
            if( Object.keys(chatMessage).length >3){createMessage()}  }} style={{paddingTop:4,borderWidth: 2,borderColor:"gray",borderLeftWidth:0,backgroundColor:"#B0E0E6" }}>
        <Icon flex={2} size={24}  name="send" color="#26c69c" />
        </TouchableOpacity>
        </HStack>
      </View>
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
                  onPress={() => navigation.navigate('FAQ', {name: 'FAQ'})}>
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

export default Chat2;