import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// Global Styles
import reset from './base/reset'
import base from './base'

// Theme
import font from './font'
import space from './space'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}
`

const Theme = {
  font,
  space,
}

export const AppThemer = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
