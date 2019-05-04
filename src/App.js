import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Display from './components/display/display'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Display />
        <p className='footer'>All trivia questions supplied by opentdb.com</p>
      </div>
    );
  }
  
}

export default App;
