import React from 'react'
import styled from 'styled-components'
import { colors } from '../helpers'

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  box-shadow: 4px 6px 9px 0px rgba(0,0,0,0.75);
`

const CommandCard = () => {
  return (
    <Wrapper />
  )
}

export default CommandCard