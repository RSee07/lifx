import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import {
  API_TOKEN,
  GET_LIGHTS_URL,
  TOGGLE_URL,
  SET_STATE_URL,
  BREATHE_URL
} from './constants'


const headers = {
  Authorization: `Bearer ${API_TOKEN}`
}

const toggleLight = async () => {
  await axios.post(TOGGLE_URL, null, { headers })
}

const turnLightRed = async () => {
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

const breatheLight = async () => {
  axios.post(
    BREATHE_URL,
    {
      color: '#FF0000'
    },
    {
      headers
    }
  )
}

const getLightStatus = async () => {
  const lightStatus = await axios.get(GET_LIGHTS_URL, { headers })
  console.log(lightStatus)
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
          <button onClick={breatheLight}>
            Breathe
          </button>
          <button onClick={getLightStatus}>
            Get light status
          </button>
        </header>
      </div>
    );
  }
}

export default App;
