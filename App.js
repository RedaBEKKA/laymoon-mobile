/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import LoginPage2 from './components/LoginPage2';
import LoginNotification1 from './components/LoginNotification1';
import LoginNotification2 from './components/LoginNotification2';
import WelcomePage from './components/WelcomePage';
import DoubleAuthPage from './components/DoubleAuthPage';
import DoubleAuth1 from './components/DoubleAuth1';
import DoubleAuth2 from './components/DoubleAuth2';
import PersonalInfo1Page from './components/PersonalInfo1';
import PersonalInfo2Page from './components/PersonalInfo2';
import PersonalInfo3Page from './components/PersonalInfo3';
import SignUp1 from './components/SignUp1';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import SignUp4 from './components/SignUp4';
import SignUp5 from './components/SignUp5';
import SignUp6 from './components/SignUp6';
import SignUp7 from './components/SignUp7';
import SignUp8 from './components/SignUp8';
import SignUp9 from './components/SignUp9';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Status1 from './components/Status1';
import Status2 from './components/Status2';
import Status3 from './components/Status3';
import CardDetails from './components/CardDetails';
import CardDetails2 from './components/CardDetails2';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import FAQ from './components/FAQ';
import FAQ2 from './components/FAQ2';
import Chat from './components/Chat';
import Chat2 from './components/Chat2';
import Chat3 from './components/Chat3';
import ResetPassword from './components/ResetPassword';
import {Provider} from 'react-redux';
import {Store} from './store/configureStore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Landing"
              component={LandingPage}
              options={{title: 'Landing'}}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{title: 'Login'}}
            />
            <Stack.Screen
              name="LoginPage2"
              component={LoginPage2}
              options={{title: 'LoginPage2'}}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{title: 'ResetPassword'}}
            />
            <Stack.Screen
              name="LoginNotification1"
              component={LoginNotification1}
              options={{title: 'LoginNotification1'}}
            />
            <Stack.Screen
              name="LoginNotification2"
              component={LoginNotification2}
              options={{title: 'LoginNotification2'}}
            />
            <Stack.Screen
              name="Welcome"
              component={WelcomePage}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen
              name="DoubleAuthPage"
              component={DoubleAuthPage}
              options={{title: 'DoubleAuthPage'}}
            />
            <Stack.Screen
              name="DoubleAuth1"
              component={DoubleAuth1}
              options={{title: 'DoubleAuth1'}}
            />
            <Stack.Screen
              name="DoubleAuth2"
              component={DoubleAuth2}
              options={{title: 'DoubleAuth2'}}
            />
            <Stack.Screen
              name="PersonalInfo1"
              component={PersonalInfo1Page}
              options={{title: 'PersonalInfo1'}}
            />
            <Stack.Screen
              name="PersonalInfo2"
              component={PersonalInfo2Page}
              options={{title: 'PersonalInfo2'}}
            />
            <Stack.Screen
              name="PersonalInfo3"
              component={PersonalInfo3Page}
              options={{title: 'PersonalInfo3'}}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{title: 'SignUp1'}}
            />
            <Stack.Screen
              name="SignUp2"
              component={SignUp2}
              options={{title: 'SignUp2'}}
            />
            <Stack.Screen
              name="SignUp3"
              component={SignUp3}
              options={{title: 'SignUp3'}}
            />
            <Stack.Screen
              name="SignUp4"
              component={SignUp4}
              options={{title: 'SignUp4'}}
            />
            <Stack.Screen
              name="SignUp5"
              component={SignUp5}
              options={{title: 'SignUp5'}}
            />
            <Stack.Screen
              name="SignUp6"
              component={SignUp6}
              options={{title: 'SignUp6'}}
            />
            <Stack.Screen
              name="SignUp7"
              component={SignUp7}
              options={{title: 'SignUp7'}}
            />
            <Stack.Screen
              name="SignUp8"
              component={SignUp8}
              options={{title: 'SignUp8'}}
            />
            <Stack.Screen
              name="SignUp9"
              component={SignUp9}
              options={{title: 'SignUp9'}}
            />
            <Stack.Screen name="Home1" component={Home1} />
            <Stack.Screen name="Home2" component={Home2} />
            <Stack.Screen name="Home3" component={Home3} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Status1" component={Status1} />
            <Stack.Screen name="Status2" component={Status2} />
            <Stack.Screen
              name="Status3"
              component={Status3}
              options={{title: 'Status3'}}
            />
            <Stack.Screen
              name="CardDetails"
              component={CardDetails}
              options={{title: 'CardDetails'}}
            />
            <Stack.Screen
              name="CardDetails2"
              component={CardDetails2}
              options={{title: 'CardDetails2'}}
            />
            <Stack.Screen
              name="Card1"
              component={Card1}
              options={{title: 'Card1'}}
            />
            <Stack.Screen
              name="Card2"
              component={Card2}
              options={{title: 'Card2'}}
            />
            <Stack.Screen
              name="Card3"
              component={Card3}
              options={{title: 'Card3'}}
            />
            <Stack.Screen
              name="Card4"
              component={Card4}
              options={{title: 'Card4'}}
            />
            <Stack.Screen
              name="Card5"
              component={Card5}
              options={{title: 'Card5'}}
            />
            <Stack.Screen
              name="Card6"
              component={Card6}
              options={{title: 'Card6'}}
            />
            <Stack.Screen
              name="Card7"
              component={Card7}
              options={{title: 'Card7'}}
            />
            <Stack.Screen
              name="Card8"
              component={Card8}
              options={{title: 'Card8'}}
            />
            <Stack.Screen name="FAQ" component={FAQ} options={{title: 'FAQ'}} />
            <Stack.Screen
              name="FAQ2"
              component={FAQ2}
              options={{title: 'FAQ2'}}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{title: 'Chat'}}
            />
            <Stack.Screen
             name="Chat2"
             component={Chat2}
             options={{title: 'Chat2'}}
           />
           <Stack.Screen
            name="Chat3"
            component={Chat3}
            options={{title: 'Chat3'}}
          />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
