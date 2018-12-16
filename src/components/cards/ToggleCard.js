import React from 'react'
import { Button } from 'grommet'
import CommandCard from '../CommandCard'
import { toggleLight } from '../../api'

const ToggleCard = () => (
  <CommandCard>
    <Button
      primary
      label='Toggle'
      onClick={toggleLight}
    />
  </CommandCard>
)

export default ToggleCard
