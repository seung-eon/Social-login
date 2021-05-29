/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";


export default class extends React.Component{
  state={
    isLoading : true
  };
  componentDidMount= async() => {  
    // 1,000가 1초
    setTimeout(() => {this.setState({isLoading: false})},3000);
  }

  render(){
    if(this.state.isLoading){
      return <SplashScreen/>
    }else{
      return <LoginScreen />;
    }
  }
}  
