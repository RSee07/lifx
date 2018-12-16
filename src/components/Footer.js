import React from 'react'
import styled from 'styled-components'
import { colors } from '../helpers'

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${colors.lightGrey};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -10px 10px 0px rgba(0,0,0,0.75);
`

const Footer = ({ isLoading }) => (
  <Wrapper>
    {
      isLoading
        ? <div>Loading</div>
        : <div>Wow</div>
    }
  </Wrapper>
)

export default Footer
