import React, { useState } from 'react'
import { RangeInput } from 'grommet'
import CommandCard from '../CommandCard'

const BrightnessCard = ({ brightness }) => {
  const [value, setValue] = useState(brightness)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <CommandCard>
      <RangeInput
        value={value}
        onChange={onChange}
      />
    </CommandCard>
  )
}

export default BrightnessCard