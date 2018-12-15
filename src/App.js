import React, { useState, useEffect } from 'react';
import { Grommet, Button, Select } from 'grommet'
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

const turnLightOffTimed = async (time) => {
  axios.put(
    SET_STATE_URL,
    {
      power: 'off',
      duration: time,
      brightness: 0
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

const times = {
  '5 minutes': 300,
  '10 minutes': 600,
  '15 minutes': 900,
  '20 minutes': 1200,
  '25 minutes': 1500,
  '30 minutes': 1800,
}

const App = () => {
  // Define the lightStatus object state
  const [lightStatus, setLightStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState('')

  // Get the status of the light and set state of lightStatus
  const getLightStatus = async () => {
    const lightMessage = await axios.get(GET_LIGHTS_URL, { headers: HEADERS })
    const { power, brightness, color: { hue, saturation, kelvin} } = lightMessage.data[0]

    setLightStatus(
      {
        power: power === 'on' ? true : false,
        brightness,
        hue,
        saturation,
        kelvin
      }
    )

    setIsLoading(false)
  }
  
  /*
  * When component mounts and for every render after, run useEffect
  * Skip an effect if the effect returns nothing
  * Continuously returns a promise if skipping effect array not added
  */
  useEffect(() => {
    getLightStatus()
  }, []) // Empty array means effect will only run once

  return (
    <Grommet plain>
      <GlobalStyle /> {/* Handles global styles */}
      <CommandContainer>
        <CommandCard>
          <Button
            primary
            label='Toggle'
            onClick={toggleLight}
            options={times}
          />
        </CommandCard>
        <CommandCard>
          <Select
            id='lightSelect'
            name='lightSelect'
            placeholder='Timer'
            value={value}
            options={Object.keys(times)}
            onChange={({ option }) => {
              turnLightOffTimed(times[option])
            }}
          />
        </CommandCard>
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
    </Grommet>
  )
}

export default App
