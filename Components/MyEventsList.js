import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'




export default function MyEventsList (props) {
  
  const events = useSelector(state => state.userData.events) 
    

   if (events.length > 0) {
       const entries = events.map(x=><Text style={styles.text} key={x.id}>{x.activity} | {x.date} |  {x.location} | {x.time}</Text>)
    return (
        <View style={styles.container} >         
            <Text style={styles.text}>My Events List</Text>
            {entries}
        </View>
    )
   } else {
       return(
        <View style={styles.container} >         
            <Text style={styles.text}>My Events List</Text>
            <Text style={styles.text}>No Events</Text>
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
  