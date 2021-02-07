import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'




export default function FindGame (props) {
  
    const activities = useSelector(state => state.userData.activities) 
    const list = activities.map(x=><Text style={styles.text} key={x.id}>{x.name}</Text>)

    return(
        <View style={styles.container}>
            <Text h1 style={styles.title}>Your Activites</Text>
            {list}
            <Text style={styles.text}>Select Activity to find games near you.</Text>
        </View>
    ) 
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
      justifyContent: 'flex-start',
      textAlign: 'center'
    }
  });
  