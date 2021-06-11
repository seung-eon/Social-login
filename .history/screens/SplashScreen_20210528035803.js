import React from 'react';
import {StyleSheet, Text, View,ImageBackground} from "react-native";
import { render } from 'react-dom';

export default class SplashScreen extends React.Component{
    render(){
        return (
            <ImageBackground
                source={require("../assets/MOZORI.png")}    
                style={{ backgroundColor:"#E1D5C2"}}>
            </ImageBackground>
        );
    }
}