import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Display from './components/display/display'


class App extends Component {
  
  componentDidMount() {
    axios.get('http://localhost:8060/api/test').then(res => {
      console.log(res.data)
    })
  }
  

  render(){
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
  
}

export default App;
