import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Home2 = ({route, navigation}) => {
  const {user, token, } = route.params;
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
            source={require('../../assets/images/card2Background.png')}
            style={[styles.card2Background]}></ImageBackground>
        </View>

        <View style={{flex: 1, width: '98%', marginTop: -50}}>
          <View style={{flex: 4, flexDirection: 'row'}}>
            <Text style={styles.labelActive}>Tout</Text>
            <Text style={styles.label}>Entrées</Text>
            <Text style={styles.label}>Sorties</Text>
            <Text style={styles.labelHighlight}>Plus</Text>
          </View>
        </View>

        <View style={{flex: 4, width: '98%', marginTop: -50}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={[styles.button, {flex: 2}]}
              onPress={() => navigation.navigate('Welcome', {name: 'Welcome'})}>
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

          <View style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
            <ImageBackground
              source={require('../../assets/images/listBackground.png')}
              style={styles.imageBackGround}></ImageBackground>
            <View style={{flex: 5, flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.buttonList,
                  {
                    flex: 2,
                    alignItems: 'flex-start',
                    marginLeft: 25,
                    marginTop: -35,
                  },
                ]}
                onPress={() =>
                  navigation.navigate('Home2', {
                    name: 'Home2',
                    user: user,
                    token: token,
                  })
                }>
                <ImageBackground
                  source={require('../../assets/images/shopping_cart_icon.png')}
                  style={styles.iconBackGround}></ImageBackground>
              </TouchableOpacity>
              <View
                style={{
                  flex: 2,
                  marginLeft: -220,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}>
                  {' '}
                  ECommerce Pay...
                </Text>
                <Text style={[styles.listSubText, {flex: 1}]}> Amazon</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: -140,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}> -432.9€ </Text>
                <Text style={[styles.listSubText, {flex: 1}]}>
                  {' '}
                  Aujourd’hui{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
            <ImageBackground
              source={require('../../assets/images/listBackground.png')}
              style={styles.imageBackGround}></ImageBackground>
            <View style={{flex: 5, flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.buttonList,
                  {
                    flex: 2,
                    alignItems: 'flex-start',
                    marginLeft: 25,
                    marginTop: -35,
                  },
                ]}
                onPress={() => navigation.navigate('Home2', {name: 'Home2'})}>
                <ImageBackground
                  source={require('../../assets/images/downloadIcon.png')}
                  style={styles.iconBackGround}></ImageBackground>
              </TouchableOpacity>
              <View
                style={{
                  flex: 2,
                  marginLeft: -220,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}> Reçu</Text>
                <Text style={[styles.listSubText, {flex: 1}]}>
                  {' '}
                  de la part de Anass
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: -140,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listTextGreen, {flex: 1}]}> +500€ </Text>
                <Text style={[styles.listSubText, {flex: 1}]}> Hier</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <ImageBackground
              source={require('../../assets/images/listBackground.png')}
              style={styles.imageBackGround}></ImageBackground>
            <View style={{flex: 5, flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.buttonList,
                  {
                    flex: 2,
                    alignItems: 'flex-start',
                    marginLeft: 25,
                    marginTop: -35,
                  },
                ]}
                onPress={() => navigation.navigate('Home3', {name: 'Home3'})}>
                <ImageBackground
                  source={require('../../assets/images/insureCarIcon.png')}
                  style={styles.iconBackGround}></ImageBackground>
              </TouchableOpacity>
              <View
                style={{
                  flex: 2,
                  marginLeft: -220,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listText, {flex: 1}]}> Transport</Text>
                <Text style={[styles.listSubText, {flex: 1}]}> Uber Taxi</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: -140,
                  marginTop: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={[styles.listTextGreen, {flex: 1}]}> -14.2€ </Text>
                <Text style={[styles.listSubText, {flex: 1}]}> 15/03/2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 1, zIndex: 0.5, marginTop: 10}}>
          <ImageBackground
            source={require('../../assets/images/navBackground1.png')}
            style={styles.imageNavBackGround}></ImageBackground>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: -60},
              ]}
              onPress={() => navigation.navigate('Home1', {name: 'Home1'})}>
              <ImageBackground
                source={require('../../assets/images/Home.png')}
                style={styles.navIconBackGroundHome}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: -60},
              ]}
              onPress={() => navigation.navigate('Status1', {name: 'Status1'})}>
              <ImageBackground
                source={require('../../assets/images/arrowNavbackground.png')}
                style={styles.navIconBackGround}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: -60},
              ]}
              onPress={() => navigation.navigate('Card1', {name: 'Card1'})}>
              <ImageBackground
                source={require('../../assets/images/cardNavBackground.png')}
                style={styles.navIconBackGround}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonList,
                {flex: 1, alignItems: 'center', marginTop: -60},
              ]}
              onPress={() => navigation.navigate('Cards', {name: 'Card4'})}>
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
                  marginTop: -60,
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

export default Home2;
