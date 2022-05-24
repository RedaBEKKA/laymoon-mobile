import React, {useRef, useState, useEffect} from 'react';
import {TextInput, Platform, Dimensions} from 'react-native';
import styles from './styles';
import {
  Box,
  Checkbox,
  Text,
  FlatList,
  Image,
  HStack,
  Pressable,
  ScrollView,
  List,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {setCards} from '../../actions/cards';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');

const Card5 = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const {card} = useSelector(state => state.cardReducer);
  const [listData, setListData] = React.useState([]);
  const [responseListData, setResponseListData] = React.useState([]);
  const [loading, setLoading] = useState(true);

  function updateCardCountryRestrictionGroup(value) {
    if(card!=undefined){
    setResponseListData([]);
    setLoading(true);
    fetch(
      `${Constants.baseUrl}cards/${card.cardId}?countryRestrictionGroupId=${value}`,
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
        // if (res.data.status == 'success') {
        // } else
        if (res.message == 'Server Error') {
          let error = [];
          error.push({message: res.message});
          setResponseListData(error);
        }
        // else if (res.status == 'Error') {
        //   const validations = [];
        //   validations.push({
        //     id: 1,
        //     message: res.StatusDescription.errors[0].message,
        //   });
        //   setResponseListData(validations);
        // }
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }

  function getCountryRestrictionGroup() {
    try {
      fetch(`${Constants.baseUrl}countryRestrictionGroups`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            setListData(res.data.countryRestrictionGroups);
            setLoading(false);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  function ListItem(item, index) {
    return (
      <Pressable
        onPress={() => updateCardCountryRestrictionGroup(item.text.id)}>
        <HStack
          bg="white"
          borderRadius={15}
          px={2}
          height={70}
          borderWidth={1}
          borderColor="#a18cdf"
          flexDirection="row"
          width="100%"
          alignSelf="center"
          mt={2}>
          <Box flex={6}>
            <Text fontSize="18" pl={2} fontWeight="bold">
              {item.text.name}
            </Text>
            <Text color="gray.500" lineHeight="16" fontSize="12" pl={2}>
              Albanie et 50 autres pays
            </Text>
          </Box>
          <Box
            mt={2}
            flex={0.7}
            bg="#7ad84d"
            borderRadius={18}
            height={8}></Box>
        </HStack>
      </Pressable>
    );
  }

  useEffect(() => {
    getCountryRestrictionGroup();
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
            <Image
              mt={1.5}
              width="100%"
              source={require('../../assets/images/upicon.png')}
              alt="ico"
            />
          </Box>
          <Box flex={6}>
            <Text fontSize="18" pl={2} fontWeight="bold">
              Paiement á l´étranger
            </Text>
            <Text color="gray.500" fontSize="12" lineHeight="12" pl={2}>
              Déterminez les zones géographiques dans lesquelles vous bloquez
              les paiement et les retraits
            </Text>
          </Box>
        </HStack>
        <FlatList
          data={listData}
          renderItem={item => <ListItem key={item.id} text={item.item} />}
        />
        {loading ? (
          <Text></Text>
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
        {loading && <Text>Chargement...</Text>}
        <Box height={screen.height / 4.5}></Box>
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

export default Card5;