/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
//import LoginScreen from "./screens/LoginScreen";
import Providers from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [500]);

  return (
    <Providers />
  );
};

export default App;