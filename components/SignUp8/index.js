import React from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const SignUp8 = ({navigation}) => {
    return (
        <View style={styles.container}>

          <View style={{flex: 10, zIndex: 5, flexDirection: 'column', marginTop:10, width:'100%',paddingLeft:15, paddingRight:10, justifyContent:'center'}}>

          <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
              <Text style={[styles.subtitle]}>Liveness</Text>
            </View>

            <View style={{flex: 2, flexDirection: 'row', justifyContent:'center'}}>
            </View>

            <View style={{flex: 3, flexDirection: 'row', justifyContent:'center', marginTop:40}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                <Text style={[styles.subtitle]}>Suivez</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
              </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row', justifyContent:'center', marginTop:-180}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                <Text style={[styles.subtitle]}>instructions</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
              </View>
            </View>

            <View style={{flex: 2,width: '98%', height: 50, justifyContent:'center'}}>
              <View style={{flex: 2, flexDirection: 'row', marginTop:40, marginLeft:60}}>
                <TouchableOpacity style = {[styles.button, {flex: 2}]} onPress={() => navigation.navigate('SignUp9', { name: 'SignUp9' }) }>
                  <ImageBackground source={require('../../assets/images/btnSignUp8.png')} style={styles.signUpBtnBackGround}>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          
        </View>
    );
};


export default SignUp8;