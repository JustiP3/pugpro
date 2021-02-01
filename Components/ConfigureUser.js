
import React, { useEffect } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';
import { Text } from 'react-native-elements'
import { useForm } from 'react-hook-form'



export default function ConfigureUser (props) {

  const { register, handleSubmit, setValue} = useForm();

  useEffect(() => {
    register('activity');
    register('selfRating');
  }, [register])

  const onSubmit = (data) => {
    Alert.alert("form data", data)
  }

    return(
    <View style={styles.container}>
      <Text style={styles.text}>Activity</Text>
      <TextInput style={styles.input} onChangeText={text=>{
        setValue('activity', text)
      }} />
        
      <Text style={styles.text}>Self-Rating</Text>
      <TextInput style={styles.input} onChangeText={text=>{
        setValue('selfRating', text)
      }} />
      <View style={styles.button}>
        <Button 
        title='S U B M I T'
        color='white'
        style={styles.buttonText}
        onPress={handleSubmit(onSubmit)}
        />
      </View>
      
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
      justifyContent: 'flex-start'
    }
  });
  