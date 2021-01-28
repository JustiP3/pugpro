import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import LandingHeader from './LandingHeader'
import { useDispatch } from 'react-redux'



export default function Landing() {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch({type:'LOGOUT'})

  return (
    <View >  
        <LandingHeader />    
        <Text>You are Logged In!</Text>
        <Button title="Logout" onPress={handleLogout}>Log Out</Button>
      <StatusBar style="auto" />
    </View>
  );
}



