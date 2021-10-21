/** @jsxImportSource theme-ui */
import { Box, Flex, Heading, ThemeProvider } from 'theme-ui'
import { defaultTheme } from '../themes/theme'

import { movies } from '../fake-api/index'

import TinderCard from 'react-tinder-card'

import { useState } from 'react';
import MovieTinder from './MovieTinder';

export function App() {





  
  return (
    <ThemeProvider theme={defaultTheme}>
      <MovieTinder /> 
    </ThemeProvider>
  )
}
export default App;

