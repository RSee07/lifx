import React from 'react'
import styled from 'styled-components'
import { color } from '../helpers'

const Wrapper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${color.lightGrey};
  border-radius: 5px;
  box-shadow: 4px 6px 9px 0px rgba(0,0,0,0.75);
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