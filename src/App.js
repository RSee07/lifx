import React, { useState, useEffect } from 'react';

// Libs
import styled, { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'

// Components
import ToggleCard from './components/cards/ToggleCard'
import TimerCard from './components/cards/TimerCard'
import BrightnessCard from './components/cards/BrightnessCard'
import Status from './components/Status'

// Helpers
import { getLightStatus } from './api'
import { media, colors } from './helpers'

// Styled components global styling
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

// Grommet theme
const theme = {
  select: {
    background: colors.grommetPurple,
    icons: {
      color: colors.white
    }
  }
}

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

const WhiteContainer = styled.div`
  color: white;
`

const App = () => {
  // Define the lightStatus object state
  const [lightStatus, setLightStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const updateLightStatus = async () => {
    // Set the current light status
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

    // After the light status has been set, set loading to false
    setIsLoading(false)
  }
  
  
  const commandResult = (result) => {
    if (result === 'ok') updateLightStatus()
  }
  
  const toggleLoading = () => {
    setIsLoading(true)
  }

  /*
  * When component mounts and for every render after, run useEffect
  * Skip an effect if the effect returns nothing
  * Continuously returns a promise if skipping effect array not added
  */
  useEffect(() => {
    updateLightStatus()
  }, []) // Empty array means effect will only run once

  return (
    <Grommet theme={theme} >
      <GlobalStyle /> {/* Handles global styles */}
      <CommandContainer>
        <ToggleCard commandResult={commandResult} toggleLoading={toggleLoading} />
        <TimerCard />
        <BrightnessCard brightness={lightStatus.brightness} />
        <WhiteContainer>
          <div>Power: {lightStatus.power ? 'On' : 'Off'}</div>
          <div>Brightness: {lightStatus.brightness}%</div>
          <div>Hue: {lightStatus.hue}</div>
          <div>Saturation: {lightStatus.saturation}</div>
          <div>Kelvin: {lightStatus.kelvin}</div>
        </WhiteContainer>
      </CommandContainer>
      <Status
        isLoading={isLoading}
        {...lightStatus}
        commandResult={commandResult}
        toggleLoading={toggleLoading}
      />
    </Grommet>
  )
}

export default App
