import React from 'react'
import styled from 'styled-components'
import { Button } from 'grommet'
import { Info } from 'grommet-icons'
import { toggleLight } from '../api'
import { colors } from '../helpers'
import { ReactComponent as Loader } from '../media/grid.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  background: ${colors.lightGrey};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -6px 10px 0px rgba(0,0,0,0.75);
`

const StyledLoader = styled(Loader)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PowerButton = styled(Button)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

  svg {
    width: 35px;
    height: 35px;
  }
`

const Footer = ({ isLoading, power, brightness, hue, saturation, kelvin, commandResult, toggleLoading }) => {
  const handleClick = async () => {
    toggleLoading()
    const result = await toggleLight()
    commandResult(result)
  }

  return (
    <Wrapper>
      { isLoading && <StyledLoader/> }
      <ContentWrapper>
        <PowerButton
          icon={<Info />}
          primary
          color={power ? '#ffffff' : colors.darkGrey }
          onClick={handleClick}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer
