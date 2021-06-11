/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Providers from './navigation';
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [500]);

  return (
    <LoginScreen />
  );
};

export default App;