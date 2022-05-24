import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {color} from 'react-native-reanimated';
import styles from './styles';

const LandingPage = ({route, navigation}) => {
  return (
    <View
      style={styles.imageBackGround}>
      <View style={{flex: 10, width: '98%'}}>
        <View style={{left: '5%', top: '10%'}}>
          <Image source={require('../../assets/images/wave1.png')}></Image>
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: '15%',
            marginBottom: '5%',
          }}>
          <Image source={require('../../assets/images/logo.png')}></Image>
        </View>

        <View
          style={{
            marginLeft: '5%',
            marginBottom: '5%',
          }}>
          <Image source={require('../../assets/images/tick.png')}></Image>
        </View>

        <View
          style={[
            styles.titles,
            {
              flex: 6,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginLeft: 10,
            },
          ]}>
          <Text style={[styles.title, {marginLeft: '5%'}]}>
            Le compte Simple Pratique Islamique
          </Text>
          <Text style={styles.subtitle}></Text>
        </View>

        <View style={[styles.buttonContainer]}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate('SignUp1', {name: 'SignUp1'})}>
            <Text style={styles.text}>Créer un compte</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.headerWrapper,
              {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignSelf: 'center',
                width: '90%',
              },
            ]}>
            <Text style={[styles.header]}></Text>
          </View>
          <TouchableOpacity
            style={[styles.button2]}
            onPress={() => navigation.navigate('Login', {name: 'Login'})}>
            <Text style={[styles.text2]}>Je me connecte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
