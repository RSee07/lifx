import React, { useState, useEffect } from 'react';

// Libs
import styled, { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'

// Components
import ToggleCard from './components/cards/ToggleCard'
import TimerCard from './components/cards/TimerCard'

// Helpers
import { getLightStatus } from './api'
import { media, colors } from './helpers'

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

const App = () => {
  // Define the lightStatus object state
  const [lightStatus, setLightStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Get the status of the light and set state of lightStatus
  const setLightStatus = async () => {
    const { power, brightness, hue, saturation, kelvin } = await getLightStatus()

    setLightStatus(
      {
        power,
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
    setLightStatus()
  }, []) // Empty array means effect will only run once

  return (
    <Grommet plain>
      <GlobalStyle /> {/* Handles global styles */}
      <CommandContainer>
        <ToggleCard />
        <TimerCard />
      </CommandContainer>
    </Grommet>
  )
}

export default App
