import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Welcome from './Components/Welcome'
import Landing from './Components/Landing'
import { useSelector } from 'react-redux'


export default function App() {
  
  const loggedIn = useSelector(state => state.loggedIn)

  if (loggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <Landing />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Welcome />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
