import React, { useState } from 'react'
import styled from 'styled-components'
import { Select } from 'grommet'
import { turnLightOffTimed } from '../api'

// Time is in seconds
const times = {
  '5 minutes': 300,
  '10 minutes': 600,
  '15 minutes': 900,
  '20 minutes': 1200,
  '25 minutes': 1500,
  '30 minutes': 1800,
}

// TODO: Figure out how to use Grommet's theming
const SelectContainer = styled.div`
  * {
    box-shadow: none;
    border-color: transparent;
    border-radius: 5px;
  }

  flex: 1; /* Grow and shrink according to remaining space in the flexbox */
  padding-right: 20px;
`

const TimerCard = ({ commandResult, toggleLoading }) => {
  const [value, setValue] = useState('')

  const handleLightChange = async option => {
    setValue(option)
    toggleLoading()
    const result = await turnLightOffTimed(times[option])
    commandResult(result)
  }

  return (
    <SelectContainer>
      <Select
        id='lightSelect'
        name='lightSelect'
        placeholder='Timer'
        value={value}
        options={Object.keys(times)}
        onChange={({ option }) => {
          handleLightChange(option)
        }}
        dropAlign={{ bottom: 'top' }} // Make the dropdown open from the top
      />
    </SelectContainer>
  )
}

export default TimerCard
