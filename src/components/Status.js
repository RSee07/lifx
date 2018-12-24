import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Button } from 'grommet'
import { Info } from 'grommet-icons'
import { toggleLight } from '../api'
import { colors } from '../helpers'
import { ReactComponent as Loader } from '../media/grid.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: ${colors.lightGrey};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -6px 10px 0px rgba(0,0,0,0.75);
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

const PowerButton = styled(Button)`
  width: 70px;
  height: 70px;
  border-radius: 35px;

  svg {
    width: 35px;
    height: 35px;
  }
`

const Footer = ({ isLoading, power, brightness, hue, saturation, kelvin, commandResult }) => {
  const handleClick = async () => {
    const result = await toggleLight()
    commandResult(result)
  }

  return (
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
              <PowerButton
                icon={<Info />}
                primary
                color={power ? '#ffffff' : colors.darkGrey }
                onClick={handleClick}
              />
            </Fragment>
          )
      }
    </Wrapper>
  )
}

export default Footer
