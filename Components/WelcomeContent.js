import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-elements'


export default function WelcomeContent (props) {
    const [screen, setScreen] = useState('home');

    const handleLoginClick = () => {
        setScreen('login')
    }
    const handleBackClick = () => {
        setScreen('home')
    }
  
    const handleSignupClick = () => {
        setScreen('signup')
    }

    if (screen === 'home') {
        return (
            <View style={styles.container} >         
              <Text h1 style={styles.title}>Welcome to PUG Pro</Text>
              <Text style={styles.text}>Test Content. This is an app for everyone who wants to compete or enjoy activities with others of similar ability.</Text>
              <Button title="Log In" onPress={handleLoginClick}>Log In</Button>
              <Button title="Sign Up" onPress={handleSignupClick}>Sign Up</Button>
              <StatusBar style="auto" />
            </View>
          );
    } else if (screen === 'login') {
        return (
            <View style={styles.container} >         
              <Text style={styles.text}>Log in here !</Text>
              <Button title="Back" onPress={handleBackClick}>Back</Button>
              <StatusBar style="auto" />
            </View>
        )
    } else if (screen === 'signup') {
        return (
            <View style={styles.container} >         
              <Text style={styles.text}>Sign up here!</Text>
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
  