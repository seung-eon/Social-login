import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
  } from 'react-native';

//import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
    //const {login, googleLogin, fbLogin} = useContext(AuthContext);

    return(
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/MOZORI.png')}
        style={styles.logo}
      />
    </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    logo: {
      height: 58,
      width: 186,
      //resizeMode: 'cover',
    },
  });