import React from 'react'
import styled from 'styled-components'
import { color } from '../helpers'
import { HEADER_HEIGHT } from '../constants'
import { ReactComponent as BarsLoader } from '../media/bars.svg'

const Wrapper = styled.div`
  height: ${HEADER_HEIGHT};
  background: ${color.black};
  overflow-y: hidden;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const Number = styled.span`
  color: ${color.white};
  font-size: 7rem;
`

const Percentage = ({ power, brightness }) => (
  <Wrapper>{brightness ? <Number>{!power ? 'OFF' : brightness}</Number> : <BarsLoader />}</Wrapper>
)

export default Percentage
