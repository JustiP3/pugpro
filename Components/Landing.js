import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import LandingHeader from './LandingHeader'
import ConfigureUser from './ConfigureUser'




export default function Landing() {
  const dispatch = useDispatch()
  const screen = useSelector(state => state.screen)

  const handleLogout = () => {
    // send API request 
    dispatch({type:'LOGOUT'})
  }
  const handleUserConfig = () => {
    // send API request 
    dispatch({type: 'CHANGE_SCREEN', data: {screen: 'landing'}})
  }

  //useEffect(() => {
    // call api for user data
    //dispatch({type: 'SET_USERDATA'}) this may be unneccessary. send all data in the login or signup request 
  //})
  

  switch (screen) {
    case 'landing': 
      return (
        <View style={styles.container} >  
            <LandingHeader />    
            <View style={styles.container}>
              <Text style={styles.text}>You are Logged In!</Text>
              <Button title="Logout" onPress={handleLogout}>Log Out</Button>
        
          </View>
        </View>
      );
    case 'configureUser':
      return (
        <View style={styles.container} >  
            <LandingHeader /> 
            <View style={styles.container}>  
            <ConfigureUser handleUserConfig={handleUserConfig} />
            <Button title="Logout" onPress={handleLogout}>Log Out</Button>
          </View>
        </View>
      );
    default:
      return (
        <View style={styles.container} >  
            <LandingHeader /> 
            <View style={styles.container}> 
            <Text>Redux state screen does not match a case in Landing component</Text>
            <Button title="Logout" onPress={handleLogout}>Log Out</Button>
            </View> 
        </View>
      );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',  
    justifyContent: 'center'   
  }, 
  text: {
    textAlign: 'center'
  },
  title: {
    justifyContent: 'flex-start'
  }
});



