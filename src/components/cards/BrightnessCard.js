import React, { useState } from 'react'
import { number } from 'prop-types'
import { RangeInput } from 'grommet'
import CommandCard from '../CommandCard'

const propTypes = {
  brightness: number,
}

const defaultProps = {
  brightness: 0,
}

const BrightnessCard = ({ brightness }) => {
  const [value, setValue] = useState(brightness)

  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <CommandCard>
      <RangeInput value={value} onChange={onChange} />
    </CommandCard>
  )
}

BrightnessCard.propTypes = propTypes
BrightnessCard.defaultProps = defaultProps
export default BrightnessCard
