import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import Signup from './Signup'



export default function WelcomeContent (props) {
    const [screen, setScreen] = useState('home');
    const dispatch = useDispatch()
        

    const handleLoginClick = () => {
        setScreen('login')
    }
    const handleBackClick = () => {
        setScreen('home')
    }
  
    const handleSignupClick = () => {
        setScreen('signup')
    }
   
    const handleLoginSubmit = ({userName, password}) => { 
      // send API request        
        dispatch({type: 'LOGIN', data: {userName, password}})
    }

    const handleSignupSubmit = ({userName, password}) => {
      // send API request
        dispatch({type: 'SIGNUP', data: {userName, password}})
    }

    if (screen === 'home') {
        return (
            <View style={styles.container} >         
              <Text h1 style={styles.title}>Welcome to PUG Pro</Text>
              <Text style={styles.text}>Test Content. This is an app for everyone who wants to compete or enjoy activities with others of similar ability.</Text>
              <Text style={styles.text}>{props.location}</Text>
              <Button title="Log In" onPress={handleLoginClick}>Log In</Button>
              <Button title="Sign Up" onPress={handleSignupClick}>Sign Up</Button>
              <StatusBar style="auto" />
            </View>
          );
    } else if (screen === 'login') {
        return (
            <View style={styles.container} >         
              <Text style={styles.text}>Log in here !</Text>
              <Login handleLoginSubmit={handleLoginSubmit}/>
              <Button title="Back" onPress={handleBackClick}>Back</Button>
              <StatusBar style="auto" />
            </View>
        )
    } else if (screen === 'signup') {
        return (
            <View style={styles.container} >         
              <Text style={styles.text}>Sign up here!</Text>
              <Signup handleSignupSubmit={handleSignupSubmit} />
              <Button title="Back" onPress={handleBackClick}>Back</Button>              
              <StatusBar style="auto" />
            </View>
        )
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
  