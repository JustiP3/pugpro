import React, { Component } from 'react';
import MainContainer from './Components/MainContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './Redux/reducer'
import * as Location from 'expo-location';


const store = createStore(reducer)

export default class App extends Component {

  state = {
    location: null,
    errorMsg: null
  }

  componentDidMount() {   
    console.log('component did mount') 
      async () => {
      let { status }  = await Location.requestPermissionsAsync();
      console.log(status)
      if (status !== 'granted') {
        this.setState({...this.state, errorMsg: 'Permission to access location was denied'});
        return;        
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      this.setState({...this.state, location})
    }    
  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMsg) {
      text = this.state.errorMsg;
    } else if (!!this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return(
      <Provider store={store}>
        <MainContainer text={text}/>
      </Provider>
    )
  }
}


  


