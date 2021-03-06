import React, { useEffect } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { Text } from 'react-native-elements'
import { useForm } from 'react-hook-form'


export default function EditProfile (props) {

    /*
  const { register, handleSubmit, setValue} = useForm();

  useEffect(() => {
    register('userName');
    register('password');
  }, [register])

  const onSubmit = (data) => {
    console.log(data)
    props.handleLoginSubmit({userName: data.userName, password: data.password})
  }

  Example Form: 
  <Text style={styles.text}>Username</Text>
      <TextInput style={styles.input} onChangeText={text=>{
        setValue('userName', text)
      }} />
        
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input} onChangeText={text=>{
        setValue('password', text)
      }} />
      <View style={styles.button}>
        <Button 
        title='S U B M I T'
        color='black'
        style={styles.buttonText}
        onPress={handleSubmit(onSubmit)}
        />
      </View>

*/
    return(
    <View style={styles.container}>
      <Text style={styles.text}>
          Test Edit Profile Content. Add email, edit username?, change password.
        </Text>      
    </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',  
      justifyContent: 'center' , 
      minHeight: 200,   
      textAlign: 'center'
    }, 
    text: {
      justifyContent: 'space-evenly',
      textAlign: 'center'
    },
    title: {
      justifyContent: 'flex-start'
    },
    input: {
      justifyContent: 'space-evenly',
      borderColor: 'gray', 
      borderWidth: 1
    },
    button: {
     
    },
    buttonText: {
      fontSize: 12,
      fontWeight: "500",
    }
  });
  