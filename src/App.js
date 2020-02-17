import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    height: 100vh;
    width: 100vw;
  `}
`

function App() {
  return <Wrapper>Hi</Wrapper>
}

export default App
