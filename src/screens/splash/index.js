import {ImageBackground, Text} from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <ImageBackground
      source={require('../../screens/bg1.jpg')}
      resizeMode={'cover'}
      style={{flex: 1, padding: 15}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
        Allo Schnutske!
      </Text>
    </ImageBackground>
  );
}
