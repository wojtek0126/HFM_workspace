/** @jsxImportSource theme-ui */
import { Box, Flex, Heading, ThemeProvider } from 'theme-ui'
import { defaultTheme } from '../themes/defaultTheme'

import { movies } from '../fake-api/index'

import TinderCard from 'react-tinder-card'
import { useState } from 'react';

export function App() {
  const moviesAPI: any = movies;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!')
  }



  // const onSwipe = (direction: any) => {
  //   console.log('You swiped: ' + direction)
  // }
  
  // const onCardLeftScreen = (myIdentifier: any) => {
  //   console.log(myIdentifier + ' left the screen')
  // }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex sx={{justifyContent: 'center', alignItems: 'center', height: "100vh", width: '100vw'}}>
      {moviesAPI.map((movie: any) =>
          <TinderCard key={movie.title} onSwipe={(dir) => swiped(dir, movie.title)} onCardLeftScreen={() => outOfFrame(movie.title)}>
            <Box sx={{ height: "80vh", width: "80vw",
              backgroundImage: 'url(' + movie.imageURL + ')', backgroundRepeat: 'no-repeat' }}>
              <Heading>{movie.title}</Heading>
            </Box>
          </TinderCard>
        )}
      </Flex>    
    </ThemeProvider>
  )
}
export default App;
