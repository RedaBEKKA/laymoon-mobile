import React, {useState, useEffect} from 'react';
import {TextInput, Platform, Dimensions, FlatList} from 'react-native';
import styles from './styles';
import {
  Box,
  Checkbox,
  Text,
  Image,
  Switch,
  VStack,
  HStack,
  Pressable,
  ScrollView,
} from 'native-base';
import {setCard,setCardOptionActive, setCardOptionOnline} from '../../actions/cards';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');
const CardDetails = ({route, navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [loadingErrors, setLoadingErrors] = useState(false);
  const [responseListData, setResponseListData] = React.useState([]);
    const dispatch = useDispatch();
    const toggleSwitch = state => {
      dispatch(setCardOptionActive(state))
  };
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {card, optionActivate,optionOnline} = useSelector(state => state.cardReducer);

  const updateCard = () => {
    if(card!=undefined){
    setResponseListData([]);
    setLoadingErrors(true);
    try {
      fetch(
        `${Constants.baseUrl}cards/${card.cardId}/activate`,
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
            navigation.navigate('Card1', {name: 'Card1'});
          } else if (res.status == 'error') {
            let error = [];
            error.push({message: res.StatusDescription.errors[0].message});
            setResponseListData(error);
            setLoadingErrors(false);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
  };

  useEffect(() => {
    if(card!=undefined){
    setIsEnabled(Boolean(card.isLive));
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

        <Box>
            <Box
              bg="white"
              borderRadius={15}
              px={2}
              height={95}
              borderWidth={2}
              borderColor="#f7f4ff"
              width="100%"
              mt={2}>
              <Text fontSize="18" textAlign={'center'} fontWeight="bold">
              Activation
              </Text>
              
           <VStack space={4} alignItems="center">
                <Text
                  color="gray.500"
                  textAlign={'left'}
                  fontSize="12"
                  lineHeight="12">
                  activer la carte
                </Text>
                {/* <Switch
                  onValueChange={toggleSwitch}
                  value={true}
                  size="md"
                  onTrackColor="#B4CE25"
                /> */}
              </VStack>

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
                onPress={updateCard}>
                <HStack direction="row">
                  <Text
                    py={1}
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    Activer
                  </Text>
                </HStack>
              </Pressable>
            </Box>
            {loadingErrors ? (
              <Text>Chargement...</Text>
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

export default CardDetails;