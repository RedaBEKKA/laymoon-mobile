import React, {useRef, useState, useEffect} from 'react';
import {Dimensions,FlatList,
    Keyboard, View,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Box, Text, Image, HStack, Pressable, ScrollView} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {setChannels, setMessages} from '../../actions/chat';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../constants/constants';
const screen = Dimensions.get('window');



const Chat3 = ({route, navigation}) => {
    
    const dropdwonArray = [
      "Comportement vis-à-vis de la clientèle",
      "Information/conseil",
      "Qualité de l'offre",
      "Tarification",
      "Défaut ou mauvaise exécution d'une opération",
      "Délais de traitement d'une opération",
      "Dysfonctionnements",
      "Contestation d'une opération pour absence d'autorisation (dont fraude, perte ou vol sur moyens de paiement)",
      "Incidents sur compte",
      "Clôture du compte",
      "Mobilité bancaire ou demande de transfert",
      "Droit au compte et service bancaire de base"
    ]

    const {channelId} = route.params;
    let [chatMessage, setChatMessage] = useState("");
   // const [channelId, setChannelId] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(screen.height/1.4);
  let DATA=[];
  const dispatch = useDispatch();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {messages,channels} = useSelector(state => state.chatReducer);

  const goBack =()=>{
    navigation.navigate('Chat', {name: 'Chat'})
  }
  
  const getMessages = () => {
    try {
      fetch(`${Constants.baseUrl}messages/${channelId}/channels`, {
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

  const createChannel = (data) => {
    try {
      fetch(`${Constants.baseUrl}channels`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
     },
     body: JSON.stringify({  userId:sessionStorage.userId,subject:data  })
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
           createMessage(response.data.channel.channelId);
          }
        });
    } catch (error) {
      console.warn("messages error",error);
    } finally {
    }
  };

  const createMessage = (id) => {
    try {
      fetch(`${Constants.baseUrl}messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
     },
     body: JSON.stringify({channelId:id,
     author:sessionStorage.userId+Math.random(),
    body:"Hi, how can i help?"}),
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            getChannels(id);
            dispatch(setMessages([]))
            // goToMessages(id)
          }
        });
    } catch (error) {
      console.warn("messages error",error);
    } finally {
    }
  };

  const goToMessages=(channel)=>{
    navigation.navigate('Chat2', {name: 'Chat2',channel:channel})
  }

  const getChannels = (channelId) => {
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
              response.data.channels.forEach(ch=>{
                
              })
              dispatch(setChannels(response.data.channels))
              goToMessages(response.data.channels.find(x=>x.channelId ==channelId))
            }
          }
        });
    } catch (error) {
      console.warn("channel error",error);
    } finally {
    }
  };

  function TodoItem(item) {
    return (
      <Pressable
        onPress={() => {
            createChannel(item.text.item);
        }}>
        <HStack
          bg="white"
          borderRadius={15}
          p={2}
          height={65}
          borderWidth={1}
          borderColor="#a18cdf"
          flexDirection="row"
          width="100%"
          alignSelf="center"
          mt={2}>
          <Box flex={6}>
            <Text fontSize="16" lineHeight="45" pl={2} fontWeight="400">
              {item.text.item}
            </Text>
          </Box>
          <Box mt={2} flex={0.7}>
            <Icon name="chevron-forward" size={28} color="grey" />
          </Box>
        </HStack>
      </Pressable>
    );
  }

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
        android: screen.height + 20,
      }),
    }}>
      <Box pt={10} px={6}>
        <HStack direction="row" mt={2}>
          <Box flex={8}>
          <TouchableOpacity onPress={()=>goBack()}>
            <Icon size={24} name="arrow-back" color="#000" />
            </TouchableOpacity>
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
        <FlatList height={screen.height/1.2}
          data={dropdwonArray}
          renderItem={item => <TodoItem key={Math.random()} text={item} />}
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

export default Chat3;