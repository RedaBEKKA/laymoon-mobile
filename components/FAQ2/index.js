import React from 'react';
import {
  ImageBackground,
  Platform,
  Dimensions,
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
import {useState} from 'react';
import MainFooter from '../Shared/MainFooter';
import NotificationCard from '../Shared/NotificationCard';
import styles from './styles';
const screen = Dimensions.get('window');

const FAQ2 = ({route, navigation}) => {
  const {user, token} = route.params;
  const [modalVisible, setShowModal] = useState(true);
  const setModalVisible = visible => {
    // modalVisible(visible);
    setShowModal(visible);
  };
  return (
    <Box
      bg="#fcfcfc"
      style={{
        height: Platform.select({
          ios: screen.height,
          android: screen.height + 50,
        }),
      }}>
      <Box style={{paddingTop: Platform.select({ios: 50, android: 50})}}>
        <HStack direction="row" mb={25}>
          <Text flex={10} px={2} mt={35} fontSize="3xl" fontWeight="bold">
            Foire aux questions
          </Text>
          <Box mt={52} flex={1.5}>
            <Pressable
              onPress={() => navigation.navigate('FAQ', {name: 'FAQ2'})}>
              <Image
                alt="icon"
                source={require('../../assets/images/iconClose.png')}
              />
            </Pressable>
          </Box>
        </HStack>
        <ScrollView bounces={false}>
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
              <Pressable
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Text fontSize="19" pl={2} fontWeight="bold">
                  Ajouter de l´argent
                </Text>
                <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                  Par virement bancaire
                </Text>
              </Pressable>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#f8df9f"
              borderRadius={18}
              height={8}></Box>
          </HStack>

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
              <Text fontSize="19" pl={2} fontWeight="bold">
                Ajouter de l´argent
              </Text>
              <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                Par carte
              </Text>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#f8df9f"
              borderRadius={18}
              height={8}></Box>
          </HStack>

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
              <Text fontSize="19" pl={2} fontWeight="bold">
                Ajouter de l´argent
              </Text>
              <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                En espéces ou par chéque
              </Text>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#f8df9f"
              borderRadius={18}
              height={8}></Box>
          </HStack>

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
              <Text fontSize="19" pl={2} fontWeight="bold">
                Mes comptes
              </Text>
              <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                Gestion de mon compte
              </Text>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#d8a6ff"
              borderRadius={18}
              height={8}></Box>
          </HStack>

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
              <Text fontSize="19" pl={2} fontWeight="bold">
                Mes comptes
              </Text>
              <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                Consulter mes relevés de compte
              </Text>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#d8a6ff"
              borderRadius={18}
              height={8}></Box>
          </HStack>

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
              <Text fontSize="19" pl={2} fontWeight="bold">
                Faire des paiements
              </Text>
              <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                Problémes avec les cartes
              </Text>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#7ad84d"
              borderRadius={18}
              height={8}></Box>
          </HStack>

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
              <Text fontSize="19" pl={2} fontWeight="bold">
                Faire des paiements
              </Text>
              <Text color="gray.500" lineHeight="16" fontSize="14" pl={2}>
                Obtenir une carte
              </Text>
            </Box>
            <Box
              mt={2}
              flex={0.7}
              bg="#7ad84d"
              borderRadius={18}
              height={8}></Box>
          </HStack>
        </ScrollView>
        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}>
          <Box
            borderTopRadius="40"
            bg="white"
            style={{
              height: '50%',
              width: '100%',
              marginTop: 'auto',
            }}>
            <Box pt={35} px={5}>
              <Text fontSize="lg" lineHeight="21" fontWeight="bold">
                Ajouter de l´argent
              </Text>
              <Text pt={0} lineHeight="19" fontSize="lg" fontWeight="bold">
                Par virement bancaire
              </Text>
            </Box>
            <Box pt={15} px={5}>
              <Text fontSize="16" lineHeight="17" fontWeight="semibold">
                Afin d´ajouter de l´argent sur votre compte par virement
                bancaire, il faut ajouter le compte Laymoon a la liste des
                bénéficiaires du compte émetteur en utilisant votre RIB.
              </Text>
              <Text pt={4} lineHeight="17" fontSize="16" fontWeight="semibold">
                Vous retrouverez votre RIB dans la rubrique document de votre
                application.
              </Text>

              <Text pt={4} lineHeight="17" fontSize="16" fontWeight="semibold">
                XXXX XXXXXXX XXXXX XXXXX XXXXXX XXXXX XXXXX XXXX XXXXX XXXXX
                XXXX XXXXX XXXX XXXX
              </Text>
            </Box>

            {/* <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.addButtonText}>Close</Text>
            </TouchableOpacity> */}

            <Box
              style={{
                flexDirection: 'column',
                marginTop: screen.height / 30,
                width: '100%',
              }}>
              <Box
                bg="white"
                bottom="-8"
                p={4}
                shadow={4}
                style={{
                  borderTopRightRadius: 25,
                  borderTopLeftRadius: 25,
                }}>
                <HStack flexDirection="row">
                  <Box flex={1}>
                    <Pressable
                      alignSelf="center"
                      onPress={() =>
                        navigation.navigate('Home1', {name: 'Home2'})
                      }>
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
                      onPress={() =>
                        navigation.navigate('Card1', {name: 'Card1'})
                      }>
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
                        navigation.navigate('Notifications', {
                          name: 'Notifications',
                        })
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
                        source={require('../../assets/images/chat_green.png')}
                      />
                    </Pressable>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
      <Box
        style={{
          flexDirection: 'column',
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
                onPress={() => navigation.navigate('Home1', {name: 'Home2'})}>
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
                  source={require('../../assets/images/chat_green.png')}
                />
              </Pressable>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ2;
