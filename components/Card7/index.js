import React, {useState, useEffect} from 'react';
import {TextInput, Platform,ImageBackground,FlatList, Dimensions} from 'react-native';
import styles from './styles';
import {
  Box,
  Checkbox,
  Text,
  Image,
  HStack,
  Switch,
  Pressable,
  ScrollView,
} from 'native-base';
import MainFooter from '../Shared/MainFooter';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');

const Card7 = ({route, navigation}) => {
  
  const [loadingErrors, setLoadingErrors] = useState(false);
  const [responseListData, setResponseListData] = React.useState([]);
  const [cardImage , setCardImage] = React.useState("");
  const {card} = useSelector(state => state.cardReducer);
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const getCardImage = () => {
    if(card!=undefined){
    setResponseListData([]);
    setLoadingErrors(true);
    try {
      fetch(
        `${Constants.baseUrl}cardimages?cardId=${card.cardId}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.AccessToken}`
          },
        },
      )
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            setCardImage('data:image/png;base64,'+res.data.cardimages.file)
            setLoadingErrors(false);
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
    getCardImage();
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
          
        </HStack>

        <ImageBackground source={{uri:cardImage}}  style={{height:  245,marginTop:45}}>
         </ImageBackground>
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

export default Card7;