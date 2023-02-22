import React from 'react'
import { Text, ImageBackground } from 'react-native';
import Lottie from 'lottie-react-native';

export default function SignInScreen() {

  return (
    <ImageBackground
      source={require('../../assets/signin.jpg')}
      resizeMode={'cover'}
      style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30 }}>
      <Text style={{ fontSize: 35, fontFamily: "SpaceMonoRegular", color: 'white', paddingBottom: 30, textAlign: "center" }}>
        sign-in with your Google account
      </Text>
      <Lottie style={{ width: 200 }} source={require('../../assets/google-singin.json')} autoPlay loop={false} speed={1.2}
      />
    </ImageBackground>
  );
}