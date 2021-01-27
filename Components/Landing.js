import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import LandingHeader from './WelcomeHeader'



export default function Landing() {

  return (
    <View >  
        <LandingHeader />    
        <Text>You are Logged In!</Text>
        <Button title="Logout">Log Out</Button>
      <StatusBar style="auto" />
    </View>
  );
}



