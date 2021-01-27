import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Welcome from './Welcome'



export default function MainContainer() { 
    return (
      <SafeAreaView>
      <Welcome />
      </SafeAreaView>
    );
}


