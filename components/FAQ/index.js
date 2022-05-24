import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Platform, TouchableOpacity} from 'react-native';
import {
  Box,
  HStack,
  Text,
  List,
  Image,
  Pressable,
  ScrollView,
} from 'native-base';
import Constants from '../../constants/constants';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');

function TodoItem(item) {
  return (
    <HStack
      bg="white"
      borderRadius={15}
      p={2}
      // height={70}
      borderWidth={1}
      borderColor="#a18cdf"
      flexDirection="row"
      width="100%"
      alignSelf="center"
      mt={2}>
      <Box flex={6}>
        <Text fontSize="19" pl={2} fontWeight="bold">
          {item.text.item.question}
        </Text>
        <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
          {item.text.item.answer}
        </Text>
      </Box>
      <Box mt={2} flex={0.7} bg="#f8df9f" borderRadius={18} height={8}></Box>
    </HStack>
  );
}

const FAQ = ({route, navigation}) => {
  let [faqData, setFaqData] = useState();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  // const {} = route.params;

  const getFAQs = () => {
    try {
      fetch(`${Constants.baseUrl}faqs`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          setFaqData(response.data.faqs);
        })
        .catch(error => {
          console.log('get faq error', error);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getFAQs();
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
      <Box style={{paddingTop: Platform.select({ios: 50, android: 50})}} px={6}>
        <HStack direction="row" mb={25}>
          <Text flex={10} fontSize="3xl" fontWeight="bold">
            FAQ
          </Text>
          <Box mt={2} flex={1.5}>
            <Pressable
              alignSelf="center"
              onPress={() => navigation.navigate('Chat', {name: 'Chat'})}>
              <Image
                alt="icon"
                source={require('../../assets/images/chatImg.png')}
              />
            </Pressable>
          </Box>
        </HStack>
        <FlatList
          data={faqData}
          renderItem={item => <TodoItem key={item.faqId} text={item} />}
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
                onPress={() =>
                  navigation.navigate('Card4', {name: 'Card4'})
                }>
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

export default FAQ;
