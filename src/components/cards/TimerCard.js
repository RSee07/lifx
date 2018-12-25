import React, { useState } from 'react'
import { Select } from 'grommet'
import CommandCard from '../CommandCard'
import { turnLightOffTimed } from '../../api'

// Time is in seconds
const times = {
  '5 minutes': 300,
  '10 minutes': 600,
  '15 minutes': 900,
  '20 minutes': 1200,
  '25 minutes': 1500,
  '30 minutes': 1800,
}

const TimerCard = ({ commandResult, toggleLoading }) => {
  const [value, setValue] = useState('')

  const handleLightChange = async (option) => {
    setValue(option)
    toggleLoading()
    const result = await turnLightOffTimed(times[option])
    commandResult(result)
  }

  return (
    <CommandCard>
      <Select
        id='lightSelect'
        name='lightSelect'
        placeholder='Timer'
        value={ value }
        options={ Object.keys(times) }
        onChange={ ({ option }) => { handleLightChange(option) } }
      />
    </CommandCard>
  )
}

export default TimerCard
