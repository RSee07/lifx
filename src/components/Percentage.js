import React from 'react'
import styled from 'styled-components'
import { color } from '../helpers'
import { ReactComponent as BarsLoader } from '../media/bars.svg'

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Number = styled.span`
  color: ${color.white};
  font-size: 7rem;
`

const Percentage = ({ power, brightness }) => (
  <Wrapper>
    { 
      brightness
        ? <Number>{ !power ? 'OFF' : brightness }</Number>
        : <BarsLoader />
    }
  </Wrapper>
)

export default Percentage