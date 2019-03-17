import React, { useState, useEffect } from 'react'

// Libs
import styled, { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'

// Components
import Percentage from './components/Percentage'
import BrightnessCard from './components/cards/BrightnessCard'
import Toast from './components/Toast'
import Status from './components/Status'

// Helpers
import { getLightStatus } from './api'
import { media, color } from './helpers'

// Constants
import { HEADER_HEIGHT, FOOTER_HEIGHT } from './constants'

// Styled components global stylins
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: ${color.black};
    font-family: 'Poppins', sans-serif;
    user-select: none; /* Disable text selection to make more app like */
    -webkit-tap-highlight-color: transparent; /* Remove highlight - webkit specific */
    -webkit-touch-callout: none; /* Remove callout - webkit specific */
  }
`

// Grommet theme
const theme = {
  select: {
    background: color.grommetPurple,
    icons: {
      color: color.white,
    },
    control: {
      extend: {
        width: '100%',
      },
    },
  },
}

// Hold all content displayed in a flexbox
const ContentContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`

// Hold all commands
const CommandContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 15px 25px;
  position: relative;
  top: ${HEADER_HEIGHT};
  height: calc(100% - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  /* For all children */
  & > * {
    /* No margin on the last child element */
    &:last-child {
      margin: 0;
    }
  }
`

// const WhiteContainer = styled.div`
//   color: white;
//   font-size: 2rem;
// `

const App = () => {
  // Define the lightStatus object state
  const [lightStatus, setLightStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Temporary
  const [message, setMessage] = useState('')

  const updateLightStatus = async () => {
    // Set the current light status
    const { power, brightness, hue, saturation, kelvin } = await getLightStatus()

    setLightStatus({
      power,
      brightness,
      hue,
      saturation,
      kelvin,
    })

    // After the light status has been set, set loading to false
    setIsLoading(false)
  }

  // TODO: Switch to Redux and remove
  const commandResult = result => {
    if (result === 'ok') updateLightStatus()
    setMessage('Command Successful')
  }

  // TODO: Switch to Redux and remove
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
    <Grommet theme={theme}>
      {/* GlobalStyle handles global styles */}
      <GlobalStyle />
      <ContentContainer>
        <Percentage power={lightStatus.power} brightness={lightStatus.brightness} />
        <CommandContainer>
          {/* <ToggleCard commandResult={commandResult} toggleLoading={toggleLoading} /> */}
          <BrightnessCard brightness={lightStatus.brightness} />
          {/* <WhiteContainer>
            <div>Power: {lightStatus.power ? 'On' : 'Off'}</div>
            <div>Brightness: {lightStatus.brightness}%</div>
            <div>Hue: {lightStatus.hue}</div>
            <div>Saturation: {lightStatus.saturation}</div>
            <div>Kelvin: {lightStatus.kelvin}</div>
          </WhiteContainer> */}
        </CommandContainer>

        {/* {message && <Toast />} */}
        <Status isLoading={isLoading} {...lightStatus} commandResult={commandResult} toggleLoading={toggleLoading} />
      </ContentContainer>
    </Grommet>
  )
}

export default App
