import React, {useRef, useState, useEffect} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
  Share,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-community/clipboard';
import Carousel from 'react-native-snap-carousel';
import Constants from '../../constants/constants';
import styles from './styles';
import {
  Box,
  Button,
  Text,
  Image,
  HStack,
  Pressable,
  ScrollView,
} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');
const {width: screenWidth} = Dimensions.get('window');
const Card4 = ({route, navigation}) => {
  const [carouselRefIndex, setcarouselRefIndex] = useState(0);
  const dispatch = useDispatch();
  const {wallets} = useSelector(state => state.walletReducer);
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const [copiedText, setCopiedText] = useState('');
  const carouselRef = useRef(null);
  const copyToClipboard = data => {
    Alert.alert('copied');
    Clipboard.setString(data);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Iban: " +wallets[carouselRefIndex].iban +" Bic: " + wallets[carouselRefIndex].bic,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  function snapNext() {
    carouselRef.current.snapToNext();
    let currentIndex = carouselRef.current.currentIndex + 1;
    if (currentIndex >= carouselRef.current.props.data.length - 1)
      currentIndex = carouselRef.current.props.data.length - 1;
    setcarouselRefIndex(currentIndex);
    let currentData = carouselRef.current.props.data[currentIndex];
  }

  function snapPrev() {
    carouselRef.current.snapToPrev();
    let currentIndex = carouselRef.current.currentIndex - 1;
    if (currentIndex <= 0) currentIndex = 0;
    setcarouselRefIndex(currentIndex);
    let currentData = carouselRef.current.props.data[currentIndex];
  }

  function showCardDetails() {
    setcarouselRefIndex(carouselRef.current.currentIndex);
  }

  useEffect(() => {}, []);

  const renderItem = ({item}) => {
    return (
      <Box>
        <View style={styles.item}>
          <TouchableOpacity onPress={showCardDetails}>
            <ImageBackground
              source={{uri: item.urlImage}}
              style={{height: screenWidth / 2.45}}>
              <Text
                fontWeight="400"
                fontSize={20}
                color={'white'}
                top={45}
                paddingLeft={10}>
                {item.walletTag}
              </Text>
              <Text
                fontWeight="semibold"
                fontSize={25}
                color={'white'}
                top={78}
                paddingLeft={10}>
                {item.authorizedBalance} {item.currency}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <HStack ml={'30%'} style={{width: '20%'}}>
          <Box flex={1} mr={1} mt={3}>
            <TouchableOpacity onPress={snapPrev}>
              <Text p={2} bg="#a2c827"></Text>
            </TouchableOpacity>
          </Box>
          <Box flex={1} ml={1} mt={3}>
            <TouchableOpacity onPress={snapNext}>
              <Text p={2} bg="#fdef50"></Text>
            </TouchableOpacity>
          </Box>
        </HStack>
      </Box>
    );
  };

  const showModalData = () => {};

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
        <HStack direction="row">
          <Text flex={10} fontWeight="bold" fontSize="3xl">
            Mon RIB
          </Text>
          <Box mt={2} flex={1.5}>
            <TouchableOpacity
              alignSelf="center"
              onPress={
                () => showModalData()
                // navigation.navigate("Card6", {
                //   name: "Card6",
                //   user: user,
                //   token: token,
                // })
              }>
              {/* <Image
                alt="icon"
                source={require('../../assets/images/btnMenu.png')}
              /> */}
            </TouchableOpacity>
          </Box>
        </HStack>

        <Box mt={5} mb={25} >
          <View >
            <Carousel
              ref={carouselRef}
              removeClippedSubviews={false}
              sliderWidth={screenWidth - 20}
              sliderHeight={screenWidth }
              itemWidth={screenWidth - 60}
              // onScroll={() => {
              //   setcarouselRefIndex(carouselRef.current.currentIndex);
              // }}
              data={wallets}
              renderItem={renderItem}
              hasParallaxImages={true}
              onSnapToItem={() => {
                  setcarouselRefIndex(carouselRef.current.currentIndex);
                }}
            />
          </View>

          <HStack flexDirection="row" width="90%" alignSelf="center">
            <Box flex={16}>
              <Text
                style={{
                  lineHeight: 16,
                  textAlign: 'left',
                }}
                p={3}
                fontSize="18"
                fontWeight="600"
                color={'#9B96AB'}>
                IBAN
              </Text>
            </Box>

            <Box flex={2}>
              <TouchableOpacity
                onPress={() => copyToClipboard(wallets[carouselRefIndex].iban)}>
                <Icon size={24} name="copy" color="#C4C4C4" />
                {/* <Ionicons size={28} color="#C4C4C4" /> */}
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack flexDirection="row" width="90%" alignSelf="center">
            <Box
              mb={1}
              style={{
                borderBottom: 2,
                borderBottomWidth: 1,
                borderColor: '#D2C2FF',
              }}
              flex={1}>
              <Text
                style={{
                  lineHeight: 16,
                  textAlign: 'center',
                }}
                pb={3}
                fontSize="15"
                fontWeight="500"
                color={'#39324B'}>
                {/* {cardDet.iban} */}
                {wallets[carouselRefIndex].iban}
                {/* {cards[carouselRefIndex].currentBalance} */}
              </Text>
            </Box>
          </HStack>
          <HStack flexDirection="row" width="90%" alignSelf="center">
            <Box flex={16}>
              <Text
                style={{
                  lineHeight: 20,
                  textAlign: 'left',
                }}
                p={3}
                fontSize="18"
                fontWeight="600"
                color={'#9B96AB'}>
                BIC
              </Text>
            </Box>

            <Box flex={2}>
              <TouchableOpacity
                onPress={() => copyToClipboard(wallets[carouselRefIndex].bic)}>
                <Icon name="copy" size={24} color="#C4C4C4" />
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack flexDirection="row" width="90%" alignSelf="center">
            <Box
              style={{
                borderBottom: 2,
                borderBottomWidth: 1,
                borderColor: '#D2C2FF',
              }}
              flex={1}>
              <Text
                style={{
                  lineHeight: 20,
                  textAlign: 'center',
                }}
                pb={3}
                fontSize="15"
                fontWeight="500"
                color={'#39324B'}>
                {wallets[carouselRefIndex].bic}
              </Text>
            </Box>
          </HStack>
          <Text>{copiedText}</Text>
          <TouchableOpacity onPress={onShare}>
            <Box
              style={{
                borderColor: '#C53030',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 15,
              }}
              borderWidth={1}>
              <Text
                style={{
                  borderColor: '#C53030',
                  width: '90%',
                  alignSelf: 'center',
                  textAlign: 'center',
                  lineHeight: 20,
                }}
                p={3}
                textAlign="center"
                color="#C53030"
                fontSize="18"
                fontWeight="600">
                PARTAGER MON RIB
              </Text>
            </Box>
          </TouchableOpacity>
          <HStack flexDirection="row" width="90%" alignSelf="center"></HStack>
        </Box>
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
                  source={require('../../assets/images/chatNavBackground.png')}
                />
              </Pressable>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Card4;
