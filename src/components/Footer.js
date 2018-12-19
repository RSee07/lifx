import React from 'react'
import styled from 'styled-components'
import { colors } from '../helpers'

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: ${colors.lightGrey};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -10px 10px 0px rgba(0,0,0,0.75);
  color: ${colors.white};
`

const Footer = ({ isLoading, power, brightness, hue, saturation, kelvin }) => (
  <Wrapper>
    <div>Power: {power ? 'On' : 'Off'}</div>
    <div>Brightness: {brightness}</div>
    <div>Hue: {hue}</div>
    <div>Saturation: {saturation}</div>
    <div>Kelvin: {kelvin}</div>
    {
      isLoading
        ? <div>Loading</div>
        : <div>Wow</div>
    }
  </Wrapper>
)

export default Footer
