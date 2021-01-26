import React from 'react';
import { Header } from 'react-native-elements';
import {store} from '../Redux/store'

export default function LandingHeader() {
  return (
    <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: store.getState().userData.userName, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}

