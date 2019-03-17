import React from 'react'
import styled from 'styled-components'
import { color } from '../helpers'

const Wrapper = styled.div`
  width: 100%;
  padding: 25px;
  margin-bottom: 15px;
  background-color: ${color.grey};
  border-radius: 5px;
  box-shadow: 2px 3px 12px 0px ${color.grommetPurpleBoxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
`

const CommandCard = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default CommandCard
