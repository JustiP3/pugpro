import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-elements'


export default function WelcomeContent () {
    return (
      <View style={styles.container} >         
        <Text h1 style={styles.title}>Welcome to PUG Pro</Text>
        <Text style={styles.text}>Test Content. This is an app for everyone who wants to compete or enjoy activities with others of similar ability.</Text>
        <Button title="Log In">Log In</Button>
        <Button title="Sign Up">Sign Up</Button>
        <StatusBar style="auto" />
      </View>
    );
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
  