import React, {useRef, useState, useEffect} from 'react';
import {TextInput, Platform, Dimensions} from 'react-native';
import styles from './styles';
import {Box, Text, Image, HStack, Pressable, ScrollView} from 'native-base';
import {
  setCards,
  setCardLimitAtmWeek,
  setCardLimitAtmDay,
  setCardOptionOnline,
} from '../../actions/cards';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');

const Card1 = ({route, navigation}) => {
  const {sessionStorage} = useSelector(state => state.userReducer);
  const {card} = useSelector(state => state.cardReducer);
  const dispatch = useDispatch();
  const getMainCard = () => {
    if(card!=undefined){
    dispatch(setCardLimitAtmDay(card.limitAtmDay));
    dispatch(setCardLimitAtmWeek(card.limitAtmWeek));
    dispatch(setCardOptionOnline(card.optionOnline));
  }
  };
  useEffect(() => {
    getMainCard();
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
      <Box 
          style={{paddingTop: Platform.select({ios: 50, android: screen.height/11})}} px={6}>
        <HStack direction="row">
          <Text flex={10} fontWeight="bold" fontSize="3xl">
            Ma carte
          </Text>
          <Box mt={2} flex={1.5}>
            <Pressable
              alignSelf="center"
              onPress={() => navigation.navigate('Card6', {name: 'Card6'})}>
              <Image
                alt="icon"
                source={require('../../assets/images/btnMenu.png')}
              />
            </Pressable>
          </Box>
        </HStack>

        <Box width="100%" mb={5}mt={2}>
          <Image
            width={'280'}
            height={'180'}
            alignSelf="center"
            alt="icon"
            source={require('../../assets/images/carte.jpg')}
          />
        </Box>

        {/* <Text mt={1} pb={0} pb={0} color="gray.500">
          Today Transaction
        </Text> */}
        <Box>
          <ScrollView bounces={false} style={styles.scrollHeight}>
            <Box>
            <HStack
                bg="white"
                borderRadius={15}
                px={2}
                height={70}
                borderWidth={2}
                borderColor="#f7f4ff"
                flexDirection="row"
                width="100%"
                alignSelf="center"
                mt={1}>
                <Box flex={1.2}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card2', {name: 'Card2'});
                    }}>
                    <Image
                      mt={1.5}
                      width="100%"
                      source={require('../../assets/images/shopping_cart_icon.png')}
                      alt="ico"
                    />
                  </Pressable>
                </Box>
                <Box flex={6}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('CardDetails', {name: 'CardDetails'});
                    }}>
                    <Text fontSize="18" pl={2} fontWeight="bold">
                    Activation
                    </Text>
                    <Text color="gray.500" fontSize="12" pl={2}>
                    activer la carte
                    </Text>
                  </Pressable>
                </Box>
            </HStack>

            <HStack
                bg="white"
                borderRadius={15}
                px={2}
                height={70}
                borderWidth={2}
                borderColor="#f7f4ff"
                flexDirection="row"
                width="100%"
                alignSelf="center"
                mt={1}>
                <Box flex={1.2}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card2', {name: 'Card2'});
                    }}>
                    <Image
                      mt={1.5}
                      width="100%"
                      source={require('../../assets/images/shopping_cart_icon.png')}
                      alt="ico"
                    />
                  </Pressable>
                </Box>
                <Box flex={6}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('CardDetails2', {name: 'CardDetails2'});
                    }}>
                    <Text fontSize="18" pl={2} fontWeight="bold">
                    Code Pin 
                    </Text>
                    <Text color="gray.500" fontSize="12" pl={2}>
                    Modification du Code Pin 
                    </Text>
                  </Pressable>
                </Box>
            </HStack>

              <HStack
                bg="white"
                borderRadius={15}
                px={2}
                height={70}
                borderWidth={2}
                borderColor="#f7f4ff"
                flexDirection="row"
                width="100%"
                alignSelf="center"
                mt={1}>
                <Box flex={1.2}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card2', {name: 'Card2'});
                    }}>
                    <Image
                      mt={1.5}
                      width="100%"
                      source={require('../../assets/images/shopping_cart_icon.png')}
                      alt="ico"
                    />
                  </Pressable>
                </Box>
                <Box flex={6}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card2', {name: 'Card2'});
                    }}>
                    <Text fontSize="18" pl={2} fontWeight="bold">
                      Opposition
                    </Text>
                    <Text color="gray.500" fontSize="12" pl={2}>
                    Opposer votre carte en cas de vol ou de perte
                    </Text>
                  </Pressable>
                </Box>
              </HStack>
              <HStack
                bg="white"
                borderRadius={15}
                px={2}
                height={70}
                borderWidth={2}
                borderColor="#f7f4ff"
                flexDirection="row"
                width="100%"
                alignSelf="center"
                mt={2}>
                <Box flex={1.2}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card5', {name: 'Card5'});
                    }}>
                    <Image
                      mt={1.5}
                      width="100%"
                      source={require('../../assets/images/downloadIcon.png')}
                      alt="ico"
                    />
                  </Pressable>
                </Box>
                <Box flex={6}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card8', {name: 'Card8'});
                    }}>
                    <Text fontSize="18" pl={2} fontWeight="bold">
                      Plafonds
                    </Text>
                    <Text color="gray.500" lineHeight="12" fontSize="12" pl={2}>
                    Consultez vos retraits et paiements utilisés et modifiez le montant de vos plafonds
                    </Text>
                  </Pressable>
                </Box>
              </HStack>
              <HStack
                bg="white"
                borderRadius={15}
                px={2}
                height={70}
                borderWidth={2}
                borderColor="#f7f4ff"
                flexDirection="row"
                width="100%"
                alignSelf="center"
                mt={2}>
                <Box flex={1.2}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Card3', {name: 'Card3'})
                    }>
                    <Image
                      mt={1.5}
                      width="100%"
                      source={require('../../assets/images/insureCarIcon.png')}
                      alt="ico"
                    />
                  </Pressable>
                </Box>
                <Box flex={6}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Card3', {name: 'Card3'})
                    }>
                    <Text fontSize="18" pl={2} fontWeight="bold">
                      Paiement en ligne
                    </Text>
                    <Text color="gray.500" lineHeight="12" fontSize="12" pl={2}>
                    Désactiver les paiements en ligne
                    </Text>
                  </Pressable>
                </Box>
              </HStack>
              <HStack
                bg="white"
                borderRadius={15}
                px={2}
                height={70}
                borderWidth={2}
                borderColor="#f7f4ff"
                flexDirection="row"
                width="100%"
                alignSelf="center"
                mt={2}>
                <Box flex={1.2}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Card5', {name: 'Card5'})
                    }>
                    <Image
                      mt={1.5}
                      width="100%"
                      source={require('../../assets/images/upicon.png')}
                      alt="ico"
                    />
                  </Pressable>
                </Box>
                <Box flex={6}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Card5', {name: 'Card5'})
                    }>
                    <Text fontSize="18" pl={2} fontWeight="bold">
                    Paiement à l’étranger
                    </Text>
                    <Text color="gray.500" fontSize="12" lineHeight="12" pl={2}>
                      Déterminez les zones géographiques dans lesquelles vous
                      bloquez les paiement et les retraits
                    </Text>
                  </Pressable>
                </Box>
              </HStack>
            </Box>

            {/* <Box style={{ height: 600 }}></Box> */}
          </ScrollView>
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
                onPress={
                  () => navigation.navigate('Status1', {name: 'Status1'})
                  // navigation.navigate("Status1", { name: "Status1" })
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
export default Card1;