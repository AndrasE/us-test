import { Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function SplashScreen({ navigation }) {


  setTimeout(() => {
    navigation.navigate("signIn")
  }, 2500);

  return (
    <Animated.View 
    key={'uniqueKey'}
            entering={FadeIn.duration(600)}
            exiting={FadeOut.duration(600)}
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      backgroundColor: "#DFFFD8"
    }}>
      <Text style={{ fontWeight: 300, fontSize: 45, color: "#181823" }}>Welcome</Text>
      <Text style={{ fontWeight: 300, fontSize: 25, marginTop: 35, color: "orange", padding: 55 }}>to</Text>
      <Lottie style={{ paddingTop: 70 }} source={require('../../assets/splash.json')} autoPlay
      />
      <Text style={{ fontWeight: 300, fontSize: 65, paddingTop: 25, color: "#181823" }}>US</Text>
    </Animated.View>
  );
}
