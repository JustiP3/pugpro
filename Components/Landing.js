import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import LandingHeader from './WelcomeHeader'


export default function Landing() {
  return (
    <View >  
        <LandingHeader />    
        <Text>You are Logged In!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

