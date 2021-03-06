import React from 'react';
import { Header } from 'react-native-elements';

export default function WelcomeHeader() {
  return (
    <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'PUG Pro', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}

