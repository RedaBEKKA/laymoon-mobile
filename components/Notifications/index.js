import React, {useRef, useState, useEffect} from 'react';
import {ImageBackground,Platform, Dimensions, TouchableOpacity} from 'react-native';
import {
  Box,
  HStack,
  Text,
  Checkbox,
  Image,
  Pressable,
  ScrollView,
} from 'native-base';
import MainFooter from '../Shared/MainFooter';
import Constants from '../../constants/constants';
import NotificationCard from '../Shared/NotificationCard';
import {useSelector, useDispatch} from 'react-redux';
import {setUser,setProfile,setNotifications} from '../../actions/user';
import styles from './styles';
const screen = Dimensions.get('window');

const Notifications = ({route, navigation}) => {
  const {user,profile, notifications,sessionStorage} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const  updateNotificationStatus = (id) => {
    console.log("checkt the id",id)
    try {
      fetch(`${Constants.baseUrl}event/notifications/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
     }
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            getNotifications();
            
          }
        });
    } catch (error) {
      console.warn("messages error",error);
    } finally {
    }
  };
  
  const getNotifications = () => {
    try {
      fetch(`${Constants.baseUrl}event/notifications/${sessionStorage.userId}/users`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            if(Object.keys(response.data).length >0){
              const array =[];
              response.data.eventNotifications.forEach(not=>{
                array.push(not)
              })
            dispatch(setNotifications(array))
          }
          }
        })
        .catch(error => {
          console.warn('Get Notification Error', error);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
  }, []);
  return (
    <Box    bg="#fcfcfc"
    style={{
      height: Platform.select({
        ios: screen.height,
        android: screen.height + 10,
      }),
    }}>
      <Box
        style={{
          height: screen.height / 1.12,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text py={35} fontSize="3xl" fontWeight="bold">
          Notifications
        </Text>
        <ScrollView bounces={false}>
        {notifications.map(notification => {
           let bcColor ="#ebf2c4"
           if(notification.isRead){
             bcColor ="white"
           }
           else{ bcColor ="#ebf2c4"}
           const date = getParsedDate(notification.createdAt);
           function getParsedDate(date){
             date = String(date).split(' ');
             const days = String(date[0]).split('-');
             //  return parseInt(days[0])+'-'+ parseInt(days[1])+'-'+parseInt(days[2]);
             return parseInt(days[2])+'-'+ parseInt(days[1])+'-'+parseInt(days[0]);
           }
        return    <Box bg="white" p={2} bg={bcColor} mb={2}>
        <HStack flexDirection="row">
        <TouchableOpacity onPress={()=>updateNotificationStatus(notification.eventNotificationId)}>
          <Box flex={8}>
            <Text fontSize="16" fontWeight="bold">
            {notification.description}
            </Text>
          </Box>
          <Box flex={3.5}>
            <Text fontSize="18" color={"#000"} fontWeight="bold">
              {notification.metaData.amount}€
            </Text>
          </Box>
          </TouchableOpacity>
        </HStack>
        <Text fontSize="xs" pt={3}>
         {date}
        </Text>
      </Box>
        })}
          {/* <NotificationCard color="#ebf2c4" textColor="#8dc028" amount={550} />
          <NotificationCard color="white" textColor="black" amount={100} /> */}
          
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

export default Notifications;
