
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-elements'




export default function ConfigureUser (props) {
    return(<Text style={styles.text}>Test Content - this is ConfigureUser</Text>)
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
  