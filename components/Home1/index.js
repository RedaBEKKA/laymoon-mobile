import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  TextInput,
  Dimensions,
  TouchableOpacity,
  Platform,
  Alert,
  FlatList,
  View,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {Box, Text, Image, HStack, Pressable, ScrollView} from 'native-base';
import Constants from '../../constants/constants';
import cardImages from '../../constants/cardimages';
import Icon from 'react-native-vector-icons/Ionicons';
import {setUser,setProfile,setNotifications} from '../../actions/user';
import {setWallets, setTransactions} from '../../actions/wallet';
import {setCard,setCardOptionActive, setCardDropdown} from '../../actions/cards';
import {useSelector, useDispatch} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import AnimatedSplash from 'react-native-animated-splash-screen';

const {width: screenWidth} = Dimensions.get('window');
const screen = Dimensions.get('window');
let walletTransId,
  transactionResponse = [],
  pressed = false,
  pressed1 = false,
  pressed2 = false;
const Home1 = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {user,profile, sessionStorage} = useSelector(state => state.userReducer);
  const {wallets} = useSelector(state => state.walletReducer);
  const [carouselRefIndex, setcarouselRefIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let [listLoading, setlistLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [transactionData, setTransactionData] = React.useState([]);
  const carouselRef = useRef(null);

  const showTransctions = () => {
    walletTransId =
      carouselRef.current.props.data[carouselRef.current.currentIndex].walletId;
    getTransaction(walletTransId, 'All');
  };

  const updateSearch = search => {
    setSearch(search);
    if (Object.keys(search).length > 3) {
      searchTransaction(walletTransId);
    }
  };

  const getUserProfile = () => {
    try {
      fetch(`${Constants.baseUrl}users/profileImage/${sessionStorage.userId}/users`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            dispatch(setProfile(response.data.userProfileImage))
          }
        })
        .catch(error => {
          console.warn('Get User Profile Error', error);
        });
    } catch (error) {
      console.error(error);
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

  const getUserById = () => {
    try {
      fetch(`${Constants.baseUrl}users/${sessionStorage.userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setUser(res.data.users));
          }
        })
        .catch(error => {
          console.warn('Get User Error', error);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getCards = walletId => {
    try {
      setIsLoading(false);
      fetch(`${Constants.baseUrl}cards?userId=${sessionStorage.userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          console.log("response",response.data)
          if (response.status == 'success') {
            let card = response.data.cards.find(c => c.walletId == walletId);
            dispatch(setCard(card));
            dispatch(setCardOptionActive(Boolean(card.isLive)));
            setIsLoading(true);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getWallets = () => {
    try {
      setIsLoading(false);
      fetch(`${Constants.baseUrl}wallets?userId=${sessionStorage.userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            const walletdata = [],
              cardDropdown = [];
            response.data.wallets.forEach(w => {
              w.urlImage = cardImages[walletdata.length].uri;
              w.walletTag == 'MAIN'?w.walletTag = 'Principal':w.walletTag = 'Transfert'
              walletdata.push(w);
              let data = {id: w.walletId.toString(), item: w.walletTag};
              cardDropdown.push(data);
              if (w.walletTag == 'Principal')getCards(w.walletId);
            });
            dispatch(setCardDropdown(cardDropdown));
            dispatch(setWallets(walletdata));
            getTransaction(walletdata[0].walletId, 'All');
            setIsLoading(true);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getTransaction = (id, transactionType) => {
    if (!id) {
      id =
        carouselRef.current.props.data[carouselRef.current.currentIndex]
          .walletId;
    }
    setlistLoading(true);
    setTransactionData([]);
    setSearch('');
    try {
      fetch(`${Constants.baseUrl}transactions?walletId=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            transactionResponse = res.data.transactions;
            setTransactionData(res.data.transactions);
            if (transactionType)
              sortTransaction(transactionResponse, transactionType);
          }
        })
        .finally(() => {});
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getAllTransaction = () => {
    try {
      fetch(
        `${Constants.baseUrl}transactions/operations/${sessionStorage.userId}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.AccessToken}`,
          },
        },
      )
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setTransactions(res.data));
          }
        })
        .finally(() => {});
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const sortTransaction = (transactionResponse, transactionType) => {
    let array = [];
    pressed = false;
    pressed1 = false;
    pressed2 = false;

    switch (transactionType) {
      case 'All':
        pressed = true;
        break;
      case 'Payin':
        pressed1 = true;
        break;
      case 'Transfer':
        pressed2 = true;
        break;
    }
    if (transactionType === 'All') {
      setTransactionData(transactionResponse);
    } else {
      transactionResponse.forEach(trans => {
        if (trans.transactionType === transactionType) array.push(trans);

        setTransactionData(array);
      });
    }
    setlistLoading(false);
  };

  const searchTransaction = id => {
    setlistLoading(true);
    try {
      fetch(`${Constants.baseUrl}transactions?walletId=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(res => {
          setTransactionData([]);
          let array = [];
          if (res.status == 'success') {
            transactionResponse = res.data.transactions;
            array = transactionResponse.filter(tr =>
              tr.description.includes(search),
            );
            setTransactionData(array);
          }
        })
        .finally(() => {
          setlistLoading(false);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const downloadTransactionHistory = () => {
    // construct csvString
    const headerString =
      'Amount,Timestamp,Currency,Description,WalletCreditBalance\n';
    const rowString = transactionData
      .map(
        d =>
          `${d.amount},${d.createdDate},${d.currency},${d.description}${d.walletCreditBalance},${d.createdDate}\n`,
      )
      .join('');
    const csvString = `${headerString}${rowString}`;
    // write the current list of answers to a local csv file
    let path = '';
    if (Platform.OS === 'android')
      path = `${RNFetchBlob.fs.dirs.DownloadDir}/statement.csv`;
    else path = `${RNFetchBlob.fs.dirs.DocumentDir}/statement.csv`;
    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/statement.csv`;
    // pathToWrite /storage/emulated/0/Download/data.csv
    RNFetchBlob.fs
      .writeFile(pathToWrite, csvString, 'utf8')
      .then(() => {
        console.log(`file path ${pathToWrite}`);
        // wrote file /storage/emulated/0/Download/data.csv
      })
      .catch(error => console.error(error));
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

  useEffect(() => {
    getUserById();
    getWallets();
    getUserProfile();
    getAllTransaction();
    getNotifications();
  }, []);

  const renderItem = ({item}) => {
    return (
      <Box>
      <View style={styles.item}>
        <TouchableOpacity onPress={showTransctions}>
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

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoading}
      logoImage={require('../../assets/images/logo.png')}
      backgroundColor={'#26c69c'}
      logoHeight={150}
      logoWidth={150}>
      <Box
        bg="#fcfcfc"
        style={{
          height: Platform.select({
            ios: screen.height,
            android: screen.height + 10,
          }),
        }}>
        <Box
          style={{paddingTop: Platform.select({ios: 50, android: screen.height/11})}}
          px={6}>
          <HStack direction="row">
            <Box flex={5}>
              <Text fontWeight="bold" fontSize="2xl">
                {user.firstname} {user.lastname} 
              </Text>
            </Box>
            <Pressable
              onPress={() =>
                navigation.navigate('Notifications', {name: 'Notifications'})
              }>
              <Box flex={1}>
                <Image
                  alt="icon"
                  source={require('../../assets/images/btnNotifications.png')}
                />
              </Box>
            </Pressable>

            <Pressable
              ml={2}
              onPress={() => navigation.navigate('Profile', {name: 'Profile'})}>
              <Box flex={1}>
                <Image   style={{width: 40, height: 40}}
                  alt="icon"
                  // source={require('../../assets/images/userProfile.png')}
                  source={{uri: profile.url }}
                />
              </Box>
            </Pressable>
          </HStack>
          <Box mt={25} mb={25}>
            <View>
              <Carousel
                ref={carouselRef}
                removeClippedSubviews={false}
                sliderWidth={screenWidth - 20}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={wallets}
                renderItem={renderItem}
                hasParallaxImages={true}
                onSnapToItem={showTransctions}
              />
            </View>
          </Box>
          <Box mb={4}></Box>
          <HStack flexDirection="row">
            <Box flex={1}>
              <TouchableOpacity
                onPress={() => getTransaction(walletTransId, 'All')}>
                <Text
                  style={{color: pressed ? '#6B6B6B' : '#9B96AB'}}
                  fontWeight="bold"
                  fontSize="lg">
                  Tout
                </Text>
              </TouchableOpacity>
            </Box>
            <Box flex={1.5}>
              <TouchableOpacity
                onPress={() => getTransaction(walletTransId, 'Payin')}>
                <Text
                  style={{color: pressed1 ? '#6B6B6B' : '#9B96AB'}}
                  fontWeight="bold"
                  fontSize="lg">
                  Entrées
                </Text>
              </TouchableOpacity>
            </Box>
            <Box flex={2}>
              <TouchableOpacity
                onPress={() => getTransaction(walletTransId, 'Transfer')}>
                <Text
                  style={{color: pressed2 ? '#6B6B6B' : '#9B96AB'}}
                  fontWeight="bold"
                  fontSize="lg">
                  Sorties
                </Text>
              </TouchableOpacity>
            </Box>
            <Box>
              {/* <TouchableOpacity onPress={downloadTransactionHistory}>
                <Text fontWeight="bold" fontSize="lg" color="#F6C143">
                  Plus
                </Text>
              </TouchableOpacity> */}
            </Box>
          </HStack>

          <Box
            mt={2}
            bg="#f7f4ff"
            p={1}
            style={{
              borderRadius: 15,
            }}>
            <HStack flexDirection="row" width="100%">
              <Box height={42} flex={6}>
                <TextInput
                  flex={1}
                  placeholder="Rechercher..."
                  onChangeText={updateSearch}
                  value={search}
                  style={{
                    height: 40,
                    paddingLeft: 5,
                    backgroundColor: '#f7f4ff',
                    fontSize: 18,
                  }}
                />
              </Box>
              <Box
                height={42}
                bg="#f7f4ff"
                flex={1}
                alignSelf="flex-start"
                pt={1}>
                <Icon name="ios-search" color="gray" size={30} />
              </Box>
            </HStack>
          </Box>
        </Box>

        <Box>
          {listLoading ? (
            <ScrollView bounces={false} style={styles.scrollHeight}>
              <Text></Text>
            </ScrollView>
          ) : (
            <FlatList
              style={styles.scrollHeight}
              data={transactionData}
              renderItem={({item}) => {
                // console.log("item trans",item)
                let balance;
                item.walletId === item.walletDebitId
                  ? (balance = '+' + item.amount)
                  : (balance = '-' + item.amount);

                return (
                  <Box>
                    <HStack
                      bg="white"
                      borderRadius={15}
                      px={2}
                      height={71}
                      borderWidth={2}
                      borderColor="#f7f4ff"
                      flexDirection="row"
                      width="90%"
                      alignSelf="center"
                      mt={2}>
                      <Box flex={1.5}>
                        {item.transactionType === 'Payin' ? (
                          <Image
                            width="100%"
                            source={require('../../assets/images/downIcon.png')}
                            alt="ico"
                          />
                        ) : (
                          <Image
                            width="100%"
                            source={require('../../assets/images/upicon.png')}
                            alt="ico"
                          />
                        )}
                      </Box>
                      <Box flex={4}>
                        <Text fontSize="lg" pl={2} fontWeight="bold">
                          {item.description} 
                        </Text>
                        <Text fontSize="md" pl={2}></Text>
                      </Box>
                      <Box flex={3.5}>
                        <Text
                          fontSize="lg"
                          textAlign={'right'}
                          pr={1}
                          fontWeight="bold">
                          {balance}€
                        </Text>
                        <Text fontSize="md" textAlign={'right'} mr={1}>
                          {item.executionDate}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                );
              }}
              keyExtractor={item => item.transactionId.toString()}
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
                    source={require('../../assets/images/Home.png')}
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
    </AnimatedSplash>
  );
};

export default Home1;