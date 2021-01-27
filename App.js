import React, { Component } from 'react';
import MainContainer from './Components/MainContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './Redux/reducer'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}


