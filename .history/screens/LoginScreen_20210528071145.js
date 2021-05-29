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

import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
    //const {login, googleLogin, fbLogin} = useContext(AuthContext);

    return(
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/MOZORI.png')}
        style={styles.logo}
      />

      {Platform.OS === 'android' ? (
        <View style={styles.buttoncontainer}>
          <SocialButton
            buttonTitle="카카오톡으로 로그인"
            btnType="kakao"
            color="#000000"
            backgroundColor="#ffe500"
            //onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="구글로 로그인"
            btnType="google"
            color="#000000"
            backgroundColor="#fff"
            //onPress={() => googleLogin()}
          />
        </View>
      ) : null}

    </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 85
    },
    logo: {
      height: 58,
      width: 186,
      resizeMode: 'contain',
    },
    buttoncontainer:{
      paddingTop: 320
    }
  });