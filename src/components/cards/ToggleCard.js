import React from 'react'
import { Button } from 'grommet'
import CommandCard from '../CommandCard'
import { toggleLight } from '../../api'

const ToggleCard = ({ commandResult, toggleLoading }) => {
  const handleClick = async () => {
    toggleLoading()
    const result = await toggleLight()
    commandResult(result)
  }
  
  return (
    <CommandCard>
      <Button
        primary
        label='Toggle'
        onClick={ handleClick }
      />
    </CommandCard>
  )
}

export default ToggleCard
