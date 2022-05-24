import React, {useState, useEffect} from 'react';
import {TextInput, Platform, Dimensions} from 'react-native';
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
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from '../../constants/constants';
import useTogglePasswordVisibility from '../hooks/useTogglePasswordVisibility';
const screen = Dimensions.get('window');
import {useSelector, useDispatch} from 'react-redux';

const Card6 = ({route, navigation}) => {
  const {card} = useSelector(state => state.cardReducer);
  const [responseListData, setResponseListData] = React.useState([]);
  const [loadingErrors, setLoadingErrors] = useState(false);
  const {user, sessionStorage} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [result, setResult] = React.useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
  useTogglePasswordVisibility();
  const verifyCardPin = () => {
    if(card!=undefined){
    setLoadingErrors(true);
    setResponseListData([]);
    try {
      console.log("res error card",card.cardId)
      fetch(`${Constants.baseUrl}cardPin/verifyCardPin`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
     },
     body: JSON.stringify({ cardId:card.cardId.toString(), pinCode:result  })
      })
        .then(response => response.json())
        .then(response => {
          console.log("res error",response)
          if (response.status == 'success') {
           if(response.data.isPinCodeValid){
              navigation.navigate('Card7', {  name: 'Card7',  })
            }
            else{ setResponseListData({cardId:"code PIN non valide"});
            setLoadingErrors(false);}
          }
          else if (response.status == 'error'){
            setResponseListData(response.StatusDescription);
            setLoadingErrors(false);
          }
        });
    } catch (error) {
      console.warn("verify pin error",error);
    } finally {
    }
  }
  };
  useEffect(() => {
    
  }, []);
  const buttonPress =(digit)=>{
    setResult(result.toString()+digit.toString())

  }
  
  const clear=()=>{
    setResult("");
    setLoadingErrors(false);
    setResponseListData([]);
  }

  const CalcButton=()=>{
    let rows =[];
    for(let i=0; i<3; i++){
      let row =[]
      for(let j=1; j<4; j++){
        row.push(<Box
        flex={1}
        mx={5}
        bg="white"
        borderWidth={2}
        borderColor="#f7f4ff"
        height={50}
        borderRadius={15}>
        <Pressable onPress={()=>{buttonPress(j+(i*3))}} >
          <Text pt={2} fontSize="lg" fontWeight="bold" alignSelf="center">
           {j+(i*3)}
          </Text>
        </Pressable>
      </Box>)
      }
      rows.push(<HStack mt={2} direction="row">{row}</HStack>)
    }
    return   rows;
  }

  return (
    <Box
      bg="#fcfcfc"
      style={{
        height: Platform.select({
          ios: screen.height,
          android: screen.height + 10,
        }),
      }}>
      <Box style={{paddingTop: Platform.select({ios: 50, android: 30})}} px={6}>
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

        <HStack direction="row">
          <Text  secureTextEntry={true} flex={2} mt={0} pb={0} pb={0} color="gray.500">
            Mot de passe
          </Text>
          
          <Box
            flex={4}
            mx={2}
            bg="white"
            borderWidth={2}
            borderColor="#f7f4ff"
            height={35}
            width={"80%"}
            borderRadius={5}>
          <TextInput style={[styles.inputStyle]} secureTextEntry={passwordVisibility}   value={result} />
           
          </Box>
          <Box  flex={1}>
                      <Pressable onPress={handlePasswordVisibility}>
                        <Icon name={rightIcon} color="#26c69c" size={25} />
                      </Pressable>
                    </Box>
        </HStack>

     <CalcButton/>
     
        <HStack direction="row" mt={2}>
          <Box flex={1} mx={5} bg="#26c69c" height={50}
            borderRadius={15}>
         
            <Pressable onPress={()=>{clear()}}>
              <Text pt={2.5} fontSize="16" color={"white"} fontWeight="bold" alignSelf="center">
              Effacer
              </Text>
            </Pressable>
          </Box>
          <Box
            flex={1}
            mx={5}
            bg="white"
            borderWidth={2}
            borderColor="#f7f4ff"
            height={50}
            borderRadius={15}>
            <Pressable onPress={()=>{buttonPress(0)}}>
              <Text pt={2} fontSize="lg" fontWeight="bold" alignSelf="center">
                0
              </Text>
            </Pressable>
          </Box>
          <Box flex={1} mx={5}>
            <Text
              pt={2}
              fontSize="lg"
              fontWeight="bold"
              alignSelf="center"></Text>
          </Box>
        </HStack>

        <Pressable
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
          }}
          onPress={() =>
            verifyCardPin()
          }>
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
        {loadingErrors ? (
              <Text>Chargement...</Text>
            ) : (
                    <Box>
                    <Text color="#FF2828">{responseListData.cardId} </Text>
                      <Text color="#FF2828">{responseListData.pinCode} </Text>
                    </Box> )}
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

export default Card6;