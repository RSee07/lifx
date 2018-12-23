import React, { Fragment } from 'react'
import styled from 'styled-components'
import { colors } from '../helpers'
import { ReactComponent as Loader } from '../media/grid.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: ${colors.lightGrey};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -10px 10px 0px rgba(0,0,0,0.75);
  color: ${colors.white};
`

const LoaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLoader = styled(Loader)`
  width: 50px;
  height: 50px;
`

const Footer = ({ isLoading, power, brightness, hue, saturation, kelvin }) => (
  <Wrapper>
    {
      isLoading
        ? (
          <LoaderWrapper>
            <StyledLoader/>
          </LoaderWrapper>
        )
        : (
          <Fragment>
            <div>Power: {power ? 'On' : 'Off'}</div>
            <div>Brightness: {brightness}</div>
            <div>Hue: {hue}</div>
            <div>Saturation: {saturation}</div>
            <div>Kelvin: {kelvin}</div>
          </Fragment>
        )
    }
  </Wrapper>
)

export default Footer
