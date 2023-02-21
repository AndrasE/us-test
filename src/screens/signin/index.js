import { ImageBackground, Text } from 'react-native'
import React from 'react'

export default function SignInScreen() {
 
    return (  
        <ImageBackground
          source={require('../../assets/singInBg1.jpeg')}
          resizeMode={'cover'}
          style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 30}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white'}}>
            This will be the sing-in screen
          </Text>
          <Text style={{fontSize: 25, color: 'white', padding: 30}}>
            I also made the StatusBar trasparent so when you sign in the app its all has the same background
            First working on funcionality after we will design it. I might need your helfen on that, but we have a few weeks to go for that. puszii
          </Text>
        </ImageBackground>
      );
}