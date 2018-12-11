import React, { Fragment } from 'react';
import axios from 'axios'
import { createGlobalStyle } from 'styled-components'
import {
  GET_LIGHTS_URL,
  TOGGLE_URL,
  SET_STATE_URL,
  BREATHE_URL,
  HEADERS
} from './constants'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #202020;
    font-family: 'Poppins', sans-serif;
  }
`

const toggleLight = async () => {
  await axios.post(TOGGLE_URL, null, { headers: HEADERS })
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
    { headers: HEADERS }
  )
}

const breatheLight = async () => {
  axios.post(
    BREATHE_URL,
    {
      color: '#FF0000'
    },
    { headers: HEADERS }
  )
}

const getLightStatus = async () => {
  const lightStatus = await axios.get(GET_LIGHTS_URL, { headers: HEADERS })
  console.log(lightStatus)
}

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div>
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
    </div>
  </Fragment>
)

export default App
