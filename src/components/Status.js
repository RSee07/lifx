import React from 'react'
import styled from 'styled-components'
import { Button } from 'grommet'
import { Info } from 'grommet-icons'
import { P } from './Text'
import { toggleLight } from '../api'
import { color } from '../helpers'
import { ReactComponent as GridLoader } from '../media/grid.svg'
import { ReactComponent as BarsLoader } from '../media/bars.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 170px;
  padding: 10px;
  background: ${color.darkGrey};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -6px 10px 0px rgba(0,0,0,0.75);
  color: ${color.white};
`

const StyledGridLoader = styled(GridLoader)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
`

const StyledBarsLoader = styled(BarsLoader)`
  width: 20px;
  height: 20px;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PowerButton = styled(Button)`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

  svg {
    width: 35px;
    height: 35px;
  }
`

const BrightnessWrapper = styled.div`
  padding-top: 10px;
`

const Footer = ({
  isLoading,
  power,
  brightness,
  hue,
  saturation,
  kelvin,
  commandResult,
  toggleLoading
}) => {
  const handleClick = async () => {
    toggleLoading()
    const result = await toggleLight()
    commandResult(result)
  }

  return (
    <Wrapper>
      { isLoading && <StyledGridLoader /> }
      <ContentWrapper>
        <PowerButton
          icon={ <Info /> }
          primary
          color={ power ? '#ffffff' : color.darkGrey }
          onClick={ handleClick }
        />
        <BrightnessWrapper>
          { 
            brightness
              ? <P>{ !power ? 'OFF' : brightness }</P>
              : <StyledBarsLoader />
          }
        </BrightnessWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer
