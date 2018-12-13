import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import styled,{ createGlobalStyle } from 'styled-components'
import {
  GET_LIGHTS_URL,
  TOGGLE_URL,
  SET_STATE_URL,
  BREATHE_URL,
  HEADERS
} from './constants'
import { media, colors } from './helpers'
import CommandCard from './components/CommandCard'

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
    background-color: ${colors.darkGrey};
    font-family: 'Poppins', sans-serif;
  }
`

const CommandContainer = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: auto; /* Specify one column */
  grid-row-gap: 15px;

  ${media.tablet} {
    grid-template-columns: auto auto; /* Specify two columns */
    grid-column-gap: 20px;
  }

  ${media.desktop} {
    margin: 0 auto;
    width: 400px;
    grid-template-columns: auto auto auto; /* Specify three columns */
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

const App = () => {
  // Define the isLightOn state
  const [isLightOn, setIsLightOn] = useState(false)

  // Get the status of the light and set state of isLightOn
  const getLightStatus = async () => {
    const lightStatus = await axios.get(GET_LIGHTS_URL, { headers: HEADERS })
    const powerStatus = (lightStatus.data[0].power === 'on') ? true : false

    setIsLightOn(powerStatus) 
  }

  /*
   * When component mounts and for every render after, run useEffect
   * Skip an effect if the effect returns nothing
   * Continuously returns a promise if skipping effect array not added
   */
  useEffect(() => {
    getLightStatus()
  }, [])

  return (
    <Fragment>
      <GlobalStyle /> {/* Handles global styles */}
      <CommandContainer>
        <CommandCard />
        <CommandCard />
        <CommandCard />
        <CommandCard />
        <CommandCard />
        <CommandCard />
        {/* <button onClick={toggleLight}>
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
        </button> */}
      </CommandContainer>
    </Fragment>
  )
}

export default App
