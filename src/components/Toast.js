import React from 'react'
import styled, { keyframes } from 'styled-components'
import CommandCard from './CommandCard'
import { color } from '../helpers';


const rotate = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(-90px)
  }
`

const stay = keyframes`
  from, to {
    transform: translateY(-90px)
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(-90px)
  }

  to {
    transform: translateY(0)
  }
`

// TODO: Do this properly
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 70px;
  color: ${color.white};
  padding: 0 15px;
  animation: ${slideUp} 0.5s ease-in-out, ${stay} 2s 0.5s, ${slideDown} 0.5s 2.5s ease-in-out;
`

const Toast = () => (
  <Wrapper>
    <CommandCard>
      <div>Timer set</div>
    </CommandCard>
  </Wrapper>
)

export default Toast