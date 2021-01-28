import React from 'react';
import { useSelector } from 'react-redux'
import Welcome from './Welcome'
import Landing from './Landing'


export default function MainContainer() { 
  const loggedIn = useSelector(state => state.loggedIn)

    if(loggedIn) {
      return (        
          <Landing />       
      );
    } else {
      return (     
          <Welcome />        
      );
    }
    
}


