import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Home3 = ({route, navigation}) => {
  const {token} = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 10,
          zIndex: 5,
          flexDirection: 'column',
          marginTop: 10,
          width: '100%',
          paddingLeft: 15,
          paddingRight: 10,
        }}>
        <View style={{flex: 1, width: '98%', marginTop: 10}}>
          <View style={{flex: 4, flexDirection: 'row'}}>
            <Text style={[styles.title, {flex: 2}]}>Anass </Text>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../../assets/images/btnNotifications.png')}
                style={[styles.headerName, {flex: 1}]}></ImageBackground>
            </View>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../../assets/images/userProfile.png')}
                style={[
                  styles.iconBackGround,
                  {flex: 1, justifyContent: 'flex-end'},
                ]}></ImageBackground>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 2,
            width: '98%',
            alignItems: 'center',
            marginTop: -10,
          }}>
          <ImageBackground
            source={require('../../assets/images/card3Background.png')}
            style={[styles.card3Background, {flex: 1}]}></ImageBackground>
        </View>

        <View style={{flex: 1, width: '98%', marginTop: -40}}>
          <View style={{flex: 4, flexDirection: 'row'}}>
            <Text style={styles.labelActive}>Pour affiner :</Text>
            <Text style={styles.label}></Text>
            <Text style={styles.label}></Text>
            <Text style={styles.labelHighlight}></Text>
          </View>
        </View>

        <View style={{flex: 4, width: '98%'}}>
          <View style={{flex: 1, marginTop: -20}}>
            <TouchableOpacity
              style={[styles.button, {flex: 2}]}
              onPress={() =>
                navigation.navigate('Notifications', {name: 'Notifications'})
              }>
              <ImageBackground
                source={require('../../assets/images/search_bk_img.png')}
                style={styles.searchBackGround}>
                <TextInput
                  style={[
                    styles.header,
                    {marginTop: 10, marginLeft: 10, color: '#B4CE25'},
                  ]}>
                  {' '}
                  Rechercher...{' '}
                </TextInput>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <ImageBackground
              source={require('../../assets/images/listBackground.png')}
              style={styles.imageBackGround}></ImageBackground>
            <View style={{flex: 5, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 3,
                  marginLeft: 10,
                  marginTop: 20,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}> Créance</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  marginLeft: -220,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <TouchableOpacity
                  style={[
                    styles.buttonList,
                    {
                      flex: 2,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    },
                  ]}
                  onPress={() =>
                    navigation.navigate('Notifications', {
                      name: 'Notifications',
                    })
                  }>
                  {/* <ImageBackground
                    source={require('../../assets/images/backgroundInnerBtn.png')}
                    style={styles.backGroundInnerBtn}>
                    <Text
                      style={[
                        styles.label,
                        {flex: 1, marginTop: -20, marginLeft: 20},
                      ]}>
                      Motant
                    </Text>
                  </ImageBackground> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <ImageBackground
              source={require('../../assets/images/listBackground.png')}
              style={styles.imageBackGround}></ImageBackground>
            <View style={{flex: 5, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 3,
                  marginLeft: 10,
                  marginTop: 20,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}>
                  {' '}
                  Autre compte bancaire
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  marginLeft: -220,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <TouchableOpacity
                  style={[
                    styles.buttonList,
                    {
                      flex: 2,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    },
                  ]}
                  onPress={() =>
                    navigation.navigate('Notifications', {
                      name: 'Notifications',
                    })
                  }>
                  {/* <ImageBackground
                    source={require('../../assets/images/backgroundInnerBtn.png')}
                    style={styles.backGroundInnerBtn}>
                    <Text
                      style={[
                        styles.label,
                        {flex: 1, marginTop: -20, marginLeft: 20},
                      ]}>
                      Motant
                    </Text>
                  </ImageBackground> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <ImageBackground
              source={require('../../assets/images/listBackground.png')}
              style={styles.imageBackGround}></ImageBackground>
            <View style={{flex: 5, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 3,
                  marginLeft: 10,
                  marginTop: 20,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}>
                  {' '}
                  Argent liquide
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  marginLeft: -220,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <TouchableOpacity
                  style={[
                    styles.buttonList,
                    {
                      flex: 2,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    },
                  ]}
                  onPress={() =>
                    navigation.navigate('Notifications', {
                      name: 'Notifications',
                    })
                  }>
                  {/* <ImageBackground
                    source={require('../../assets/images/backgroundInnerBtn.png')}
                    style={styles.backGroundInnerBtn}>
                    <Text
                      style={[
                        styles.label,
                        {flex: 1, marginTop: -20, marginLeft: 20},
                      ]}>
                      Motant
                    </Text>
                  </ImageBackground> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 1, zIndex: 0.5, marginTop: 20}}>
          <ImageBackground
            source={require('../../assets/images/navBackground1.png')}
            style={styles.imageNavBackGround}></ImageBackground>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: 10},
              ]}
              onPress={() => navigation.navigate('Home1', {name: 'Home1'})}>
              <ImageBackground
                source={require('../../assets/images/Home.png')}
                style={styles.navIconBackGroundHome}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: 10},
              ]}
              onPress={() => navigation.navigate('Status1', {name: 'Status1'})}>
              <ImageBackground
                source={require('../../assets/images/arrowNavbackground.png')}
                style={styles.navIconBackGround}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: 10},
              ]}
              onPress={() => navigation.navigate('Card1', {name: 'Card1'})}>
              <ImageBackground
                source={require('../../assets/images/cardNavBackground.png')}
                style={styles.navIconBackGround}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: 10},
              ]}
              onPress={() =>
                navigation.navigate('Notifications', {name: 'Notifications'})
              }>
              <ImageBackground
                source={require('../../assets/images/listNavBackground.png')}
                style={styles.navIconBackGround}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {
                  flex: 1,
                  alignItems: 'center',
                  marginTop: 10,
                  marginRight: 20,
                },
              ]}
              onPress={() => navigation.navigate('FAQ', {name: 'FAQ'})}>
              <ImageBackground
                source={require('../../assets/images/chatNavBackground.png')}
                style={styles.navIconBackGround}></ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home3;
