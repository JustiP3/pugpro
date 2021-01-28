import React from 'react';
import { Header } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'

export default function LandingHeader() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.userData.userName)
  return (
    <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: userName, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}

