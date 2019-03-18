import React from 'react'
import { func } from 'prop-types'
import { Button } from 'grommet'
import CommandCard from '../CommandCard'
import { toggleLight } from '../../api'

const propTypes = {
  commandResult: func.isRequired,
  toggleLoading: func.isRequired,
}

const ToggleCard = ({ commandResult, toggleLoading }) => {
  const handleClick = async () => {
    toggleLoading()
    const result = await toggleLight()
    commandResult(result)
  }

  return (
    <CommandCard>
      <Button primary label='Toggle' onClick={handleClick} />
    </CommandCard>
  )
}

ToggleCard.propTypes = propTypes
export default ToggleCard
