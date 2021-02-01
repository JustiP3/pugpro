import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import LandingHeader from './LandingHeader'
import ConfigureUser from './ConfigureUser'




export default function Landing() {
  const dispatch = useDispatch()
  const screen = useSelector(state => state.screen)

  const handleLogout = () => dispatch({type:'LOGOUT'})
  const handleUserConfig = () => dispatch({type: 'CHANGE_SCREEN', data: {screen: 'landing'}})

  //useEffect(() => {
    // call api for user data
    //dispatch({type: 'SET_USERDATA'}) this may be unneccessary. send all data in the login or signup request 
  //})
  

  switch (screen) {
    case 'home': // in the future 'home' is the welcome screen when not logged in, 'landing' is for logged in users
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
            <ConfigureUser handleUserConfig={handleUserConfig} />
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



