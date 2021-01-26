import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import WelcomeHeader from './WelcomeHeader'
import WelcomeContent from './WelcomeContent'

export default function Welcome() {
  return (
    <View >  
        <WelcomeHeader />    
        <WelcomeContent />
      <StatusBar style="auto" />
    </View>
  );
}


