import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import url from './api'
import axios from 'axios'


class App extends Component {
  
  componentDidMount() {
    debugger
    axios.get('/api/test').then(res => {
      console.log(res.data)
    })
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
