import React, {useRef, useState, useEffect} from 'react';
import {TextInput, Platform, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import {
  Box,
  Checkbox,
  Text,
  Image,
  Radio,
  HStack,
  Pressable,
  ScrollView,
} from 'native-base';
import {setCard} from '../../actions/cards';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');

const Card2 = ({route, navigation}) => {
  const [value, setValue] = React.useState('0');
  const [responseListData, setResponseListData] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingErrors, setLoadingErrors] = useState(false);
  const dispatch = useDispatch();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {card} = useSelector(state => state.cardReducer);

  const setFormValues = () => {
    switch (card.statusCode) {
      case 'STOLEN':
        setValue('3');
        break;
      case 'Lost':
        setValue('2');
        break;
      case 'UNLOCK':
        setValue('0');
        break;
      case 'Block':
        setValue('1');
        break;
    }
  };

  function updateCardStatus() {
    if(card!=undefined){
    setResponseListData([]);
    setLoadingErrors(true);
    fetch(
      `${Constants.baseUrl}cards/${card.cardId}/lockUnlock?lockStatus=${value}`,
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
          card.statusCode = res.data.card.statusCode;
          dispatch(setCard(card));
          navigation.navigate('Card1', {name: 'Card1'});
        } else if (res.status == 'error') {
          let error = [];
          error.push({message: res.StatusDescription.errors[0].message});
          setResponseListData(error);
          setLoadingErrors(false);
        }
      });
    }
  }

  useEffect(() => {
    if(card!=undefined){
    setFormValues();
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
        <Box>
          <ScrollView bounces={false} height={screen.height / 2}>
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
                  onPress={() => navigation.navigate('Card2', {name: 'Card2'})}>
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
                  onPress={() => navigation.navigate('Card2', {name: 'Card2'})}>
                  <Text fontSize="18" pl={2} fontWeight="bold">
                    Opposition
                  </Text>
                  <Text color="gray.500" fontSize="12" pl={2}>
                  Opposer votre carte en cas de vol ou de perte
                  </Text>
                </Pressable>
              </Box>
            </HStack>
            {loading ? (
              <Text>Chargement...</Text>
            ) : (
              <Box
                bg="white"
                borderRadius={15}
                p={2}
                pb={2}
                height={165}
                borderWidth={2}
                borderColor="#f7f4ff"
                width="100%"
                mt={2}>
                <Radio.Group
                  // defaultValue="1"
                  name="myRadioGroup"
                  value={value}
                  onChange={nextValue => {
                    setValue(nextValue);
                  }}>
                  <Radio value="0">Débloquer la carte</Radio>
                  <Radio value="1">Bloquer la carte </Radio>
                  <Radio value="2">Perte de carte</Radio>
                  <Radio value="3">Vol de carte</Radio>
                </Radio.Group>
                <Pressable
                  style={{
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: '#26c69c',
                    height: 30,
                    width: 160,
                  }}
                  onPress={updateCardStatus}>
                  <HStack direction="row">
                    <Text
                      py={1}
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Valider 
                    </Text>
                  </HStack>
                </Pressable>
              </Box>
            )}
            {loadingErrors ? (
              <Text>Loading</Text>
            ) : (
              <FlatList
                data={responseListData}
                renderItem={({item, index}) => {
                  return (
                    <Box>
                      <Text color="#FF2828">{item.message} </Text>
                    </Box>
                  );
                }}
                keyExtractor={item => item.id}
              />
            )}
            <Box
              bg="white"
              borderRadius={15}
              p={2}
              height={115}
              borderWidth={2}
              borderColor="#f7f4ff"
              width="100%"
              mt={2}>
              <Text textAlign="center" fontSize="16" fontWeight="bold">
                Opposer par téléphone
              </Text>
              <Text textAlign="center" color="gray.500" fontSize="14">
                +33 184 70 0212
              </Text>
              <Pressable
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: '#26c69c',
                  margin: 10,
                  opacity: 1,
                  paddingRight: 10,
                  paddingLeft: 10,
                  height: 30,
                  width: 160,
                }}
                onPress={() => navigation.navigate('Card2', {name: 'Card2'})}>
                <HStack direction="row">
                  <Text
                    py={1}
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    Valider l’opposition
                  </Text>
                </HStack>
              </Pressable>
            </Box>
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

export default Card2;