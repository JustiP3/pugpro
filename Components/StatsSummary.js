import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { useSelector } from 'react-redux'




export default function StatsSummary (props) {
  
    const activites = useSelector(state => state.userData.activites)


   if (activities.length > 0) {
       const entries = activites.map(x=><Text style={styles.text} key={x.name}>{x.name} - Self Rating: {x.selfRating}</Text>)
    return (
        <View style={styles.container} >         
            <Text style={styles.text}>Stats Summary</Text>
            {entries}
        </View>
    )
   } else {
       return(
        <View style={styles.container} >         
            <Text style={styles.text}>Stats Summary</Text>
            <Text style={styles.text}>No Activities</Text>
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
  