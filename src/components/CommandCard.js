import React from 'react'
import styled from 'styled-components'
import { color } from '../helpers'

const Wrapper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${color.darkGrey};
  border-radius: 5px;
  box-shadow: 2px 3px 12px 0px rgba(105,105,105,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`

const CommandCard = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default CommandCard