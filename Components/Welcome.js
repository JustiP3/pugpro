import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeHeader from './WelcomeHeader'
import WelcomeContent from './WelcomeContent'

export default function Welcome() {
  return (
    <View >  
        <WelcomeHeader style={styles.title}/>    
        <WelcomeContent style={styles.container}/>
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

