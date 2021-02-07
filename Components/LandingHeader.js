import React from 'react';
import { Header, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'

export default function LandingHeader() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.userData.userName)

  const handleEditProfilePress = () => {
    dispatch({type: 'CHANGE_SCREEN', data: {screen: 'editProfile'}})
  }

  const handleHomePress = () => {
    dispatch({type: 'CHANGE_SCREEN', data: {screen: 'landing'}})
  }

  return (
    <Header
        leftComponent={<Button title="Menu" onPress={handleEditProfilePress} /> }
        centerComponent={{ text: userName, style: { color: '#fff' } }}
        rightComponent={<Button title="Home" onPress={handleHomePress} />}
    />
  );
}

