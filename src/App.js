import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const TOGGLE_URL = 'https://api.lifx.com/v1/lights/all/toggle'
const SET_STATE_URL = 'https://api.lifx.com/v1/lights/all/state'
const API_TOKEN = 'c3388f7729cb9c1364701c49434f6a4e860ec761874ec9d228042afb017a15ae'
const headers = {
  Authorization: `Bearer ${API_TOKEN}`
}

const toggleLight = () => {
  axios.post(TOGGLE_URL, null, { headers })
}

const turnLightRed = () => {
  axios.put(
    SET_STATE_URL,
    {
      power: 'on',
      color: '#FF0000',
      duration: 5,
      brightness: 0.1
    },
    {
      headers
    }
  )
}

class App extends Component {
  render() {
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
          <button onClick={toggleLight}>
            Toggle Light
          </button>
          <button onClick={turnLightRed}>
            Turn light red
          </button>
        </header>
      </div>
    );
  }
}

export default App;
