import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    GoogleSignin.configure({
      webClientId: '1088560925863-k434frhvocrr98finbbg3misriaeof8h.apps.googleusercontent.com',
    });
  
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />

    </Stack.Navigator>
  );
};

export default AuthStack;
