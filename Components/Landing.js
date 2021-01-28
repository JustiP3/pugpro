import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import LandingHeader from './LandingHeader'
import ConfigureUser from './ConfigureUser'




export default function Landing() {
  const dispatch = useDispatch()
  const screen = useSelector(state => state.screen)

  const handleLogout = () => dispatch({type:'LOGOUT'})

  switch (screen) {
    case 'home':
      return (
        <View >  
            <LandingHeader />    
            <Text>You are Logged In!</Text>
            <Button title="Logout" onPress={handleLogout}>Log Out</Button>
          <StatusBar style="auto" />
        </View>
      );
    case 'configureUser':
      return (
        <View >  
            <LandingHeader />    
            <ConfigureUser />
            <Button title="Logout" onPress={handleLogout}>Log Out</Button>
          <StatusBar style="auto" />
        </View>
      );
    default:
      return (
        <View >  
            <LandingHeader />    
            <Text>You are Logged In!</Text>
            <Button title="Logout" onPress={handleLogout}>Log Out</Button>
          <StatusBar style="auto" />
        </View>
      );
  }
 
}



