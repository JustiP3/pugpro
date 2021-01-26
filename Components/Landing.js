import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import LandingHeader from './WelcomeHeader'
import { store } from '../Redux/store'
import { logout } from '../Redux/actions'


export default function Landing() {
  console.log(store.getState())
  return (
    <View >  
        <LandingHeader />    
        <Text>You are Logged In!</Text>
        <Button title="Logout" onPress={store.dispatch(logout())}>Log Out</Button>
      <StatusBar style="auto" />
    </View>
  );
}



