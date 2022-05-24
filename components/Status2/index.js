import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Box,
  HStack,
  Text,
  Modal,
  Checkbox,
  Image,
  Pressable,
  Button,
  ScrollView,
} from 'native-base';
import MainFooter from '../Shared/MainFooter';
import Icon from 'react-native-vector-icons/Ionicons';
import {setBeneficiaries, setSelectedBeneficiary} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import Constants from '../../constants/constants';
const screen = Dimensions.get('window');

const Status2 = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {user, sessionStorage, beneficiaries} = useSelector(
    state => state.userReducer,
  );
  function TodoItem(item) {
    return (
      <Pressable
        onPress={() => {
          dispatch(setSelectedBeneficiary(item.text));
          navigation.navigate('Status1', {name: 'Status1'});
        }}>
        <HStack
          bg="white"
          borderRadius={15}
          p={2}
          height={70}
          borderWidth={1}
          borderColor="#a18cdf"
          flexDirection="row"
          width="100%"
          alignSelf="center"
          mt={2}>
          <Box flex={6}>
            <Text fontSize="19" lineHeight="45" pl={2} fontWeight="bold">
              {item.text.name}
            </Text>
          </Box>
          <Box mt={2} flex={0.7}>
            <Icon name="chevron-forward" size={28} color="grey" />
          </Box>
        </HStack>
      </Pressable>
    );
  }
  const Beneficiaries = () => {
    try {
      fetch(`${Constants.baseUrl}beneficiaries?userId=${user.userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(res => {
          const beneficiaries = [];
          res.data.beneficiaries.forEach(data => {
            const index = beneficiaries.findIndex(x => x.id == data.id);
            if (index <= -1) {
              data.id = data.id.toString();
              data.item = data.name;
              beneficiaries.push(data);
            }
          });
          dispatch(setBeneficiaries(beneficiaries));
        })
        .finally(() => {});
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    Beneficiaries();
  }, []);
  return (
    <Box
      bg="gray.100"
      style={{
        height: Platform.select({
          ios: screen.height,
          android: screen.height + 10,
        }),
      }}>
      <Box
        width={'90%'}
        alignSelf="center"
        style={{paddingTop: Platform.select({ios: 50, android: 50})}}>
        <HStack direction="row" mb={25}>
          <Text flex={10} px={2} fontSize="2xl" fontWeight="bold">
            Choisir un Bénéficiaire
          </Text>
          <Box mt={2} flex={1.5}>
            <Pressable
              alignSelf="center"
              onPress={() => navigation.navigate('Status1', {name: 'Status1'})}>
              <Image
                alt="icon"
                source={require('../../assets/images/iconClose.png')}
              />
            </Pressable>
          </Box>
        </HStack>
        {/* <ScrollView bounces={false}> */}

        <FlatList
          data={beneficiaries}
          renderItem={item => <TodoItem key={item.id} text={item.item} />}
        />
        <Pressable
          style={{
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: '#26c69c',
          }}
          mt={5}
          py={2}
          width="85%"
          onPress={() => {
            navigation.navigate('Status3', {name: 'Status3'});
          }}>
          <HStack direction="row">
            <Box flex={6}>
              <Text
                mt={1}
                style={{
                  color: '#fff',
                  fontWeight: '600',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Ajouter un bénéficiare
              </Text>
            </Box>
            <Box mt={0.8} flex={0.7}>
              <Icon name="add" size={28} color="white" />
            </Box>
          </HStack>
        </Pressable>
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
                  source={require('../../assets/images/arrows_green.png')}
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

export default Status2;