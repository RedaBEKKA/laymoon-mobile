import React, {useRef, useState, useEffect} from 'react';
import {TextInput, ScrollView, Platform, Dimensions} from 'react-native';
import styles from './styles';
import {
  Box,
  Checkbox,
  Text,
  Image,
  HStack,
  Pressable,
  Slider,
} from 'native-base';
import MainFooter from '../Shared/MainFooter';
import {
  setCards,
  setCardLimitAtmWeek,
  setCardLimitAtmDay,
} from '../../actions/cards';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');

const Card8 = ({route, navigation}) => {
  const [limitAtmDayData, setLimitAtmDayData] = useState(0);
  const [limitAtmWeekData, setLimitAtmWeekData] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {card, limitAtmDay, limitAtmWeek} = useSelector(
    state => state.cardReducer,
  );

  function updateCardLimits() {
    if(card!=undefined){
    setLoading(true);
    fetch(
      `${Constants.baseUrl}cards/${card.cardId}/limits?limitAtmWeek=${limitAtmWeekData}&limitAtmDay=${limitAtmDayData}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(res => {
        if (res.status == 'success') {
          card.limitAtmDay = res.data.card.limitAtmDay;
          card.limitAtmWeek = res.data.card.limitAtmWeek;
          dispatch(setCard(card));
          dispatch(setCardLimitAtmDay(res.data.card.limitAtmDay));
          dispatch(setCardLimitAtmWeek(res.data.card.limitAtmWeek));
          navigation.navigate('Card1', {name: 'Card1'});
        }
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }
  useEffect(() => {
    if(card!=undefined){
    setLimitAtmDayData(limitAtmDay);
    setLimitAtmWeekData(limitAtmWeek);
  }
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
        <HStack direction="row">
          <Text flex={10} fontWeight="bold" fontSize="3xl">
            Ma carte
          </Text>
          <Box mt={2} flex={1.5}>
            <Pressable
              alignSelf="center"
              onPress={() =>
                navigation.navigate('Card6', {
                  name: 'Card6',
                  user: user,
                  token: sessionStorage.AccessToken,
                })
              }>
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
        <ScrollView style={{height: screen.height / 1.8}}>
          <HStack
            bg="white"
            borderRadius={15}
            p={2}
            height={85}
            borderWidth={2}
            borderColor="#f7f4ff"
            flexDirection="row"
            width="100%"
            alignSelf="center"
            mt={2}>
            <Box flex={1.2}>
              <Image
                mt={1.5}
                width="100%"
                source={require('../../assets/images/downloadIcon.png')}
                alt="ico"
              />
            </Box>
            <Box flex={6}>
              <Text fontSize="18" pl={2} fontWeight="bold">
                Plafonds
              </Text>
              <Text color="gray.500" lineHeight="12" fontSize="12" pl={2}>
              Consultez vos retraits et paiements utilisés et modifiez le montant de vos plafonds
              </Text>
            </Box>
          </HStack>

          <Box
            bg="white"
            borderRadius={15}
            px={2}
            height={120}
            borderWidth={1}
            borderColor="#a18cdf"
            width="100%"
            alignSelf="center"
            mt={2}>
            <Box>
              <Text fontSize="16" pl={2} mb={1} fontWeight="bold">
                Plafonds de retrait
              </Text>
              <Text
                color="gray.500"
                mb={1}
                lineHeight="16"
                fontSize="14"
                pl={2}>
                Vous disposez d’un plafond de retrait de 500€ sur 7 jours glissants
              </Text>
              <Slider
                defaultValue={card.limitAtmDay}
                maxValue={500}
                onChange={v => {
                  setLimitAtmDayData(Math.floor(v));
                }}>
                <Slider.Track>
                  <Slider.FilledTrack bg="#26c69c" />
                </Slider.Track>
                <Slider.Thumb bg="#26c69c" />
              </Slider>
              <Box flexDirection="row">
                <Text flex={6}>{limitAtmDayData}€</Text>
                <Text flex={1}>500€</Text>
              </Box>
            </Box>
          </Box>

          <Box
            bg="white"
            borderRadius={15}
            px={2}
            height={120}
            borderWidth={1}
            borderColor="#a18cdf"
            width="100%"
            alignSelf="center"
            mt={2}>
            <Box>
              <Text fontSize="16" pl={2} mb={1} fontWeight="bold">
                Plafonds de retrait
              </Text>
              <Text
                color="gray.500"
                mb={1}
                lineHeight="16"
                fontSize="14"
                pl={2}>
                Vous disposez d’un plafond de retrait de 3500€ sur 7 jours glissants
              </Text>
              <Slider
                defaultValue={card.limitAtmWeek}
                maxValue={3500}
                onChange={v => {
                  setLimitAtmWeekData(Math.floor(v));
                }}>
                <Slider.Track>
                  <Slider.FilledTrack bg="#26c69c" />
                </Slider.Track>
                <Slider.Thumb bg="#26c69c" />
              </Slider>
              <Box flexDirection="row">
                <Text flex={6}>{limitAtmWeekData}€</Text>
                <Text flex={1}>3500€</Text>
              </Box>
            </Box>
          </Box>
          {loading ? (
            <Text>Chargement...</Text>
          ) : (
            <Pressable
              onPress={updateCardLimits}
              mt={6}
              style={{
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#26c69c',
                margin: 10,
                opacity: 1,
                paddingRight: 25,
                paddingLeft: 25,
                height: 45,
              }}>
              <HStack direction="row">
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                  py={3}>
                  Valider
                </Text>
              </HStack>
            </Pressable>
          )}
        </ScrollView>
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
                  navigation.navigate('Notifications', {name: 'Notifications'})
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

export default Card8;