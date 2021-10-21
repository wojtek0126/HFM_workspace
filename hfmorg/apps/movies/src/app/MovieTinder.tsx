/** @jsxImportSource theme-ui */
import { Button, Flex, Heading, Paragraph } from 'theme-ui'

import { movies } from '../fake-api/index'

import TinderCard from 'react-tinder-card'

import { useState } from 'react';

export function MovieTinder() {
  const moviesAPI: any = movies;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!')
  }

  
  return (
   
      <Flex sx={{justifyContent: 'center',
       alignItems: 'center',
        minHeight: "100vh",
         width: '100vw',
          textAlign: 'center',
           overflow: 'hidden',
            flexDirection: 'column',
            backgroundColor: 'green'
            }}>
      {moviesAPI.map((movie: any) =>
      <Flex sx={{
        width: "90vw", maxWidth: "260px", height: "300px"
        }}>
        <TinderCard sx={{position: 'absolute', top: '10vh' }} key={movie.title} onSwipe={(dir) => swiped(dir, movie.title)} onCardLeftScreen={() => outOfFrame(movie.title)}>
        <Paragraph sx={{padding: 10, maxWidth: '260px', backgroundColor: 'black', color: 'white',
                                 fontWeight: 'bold'}} >{`${movie.title}(${movie.rating}/10)`}</Paragraph>
                    <Flex sx={{position: "relative",
                      width: "90vw", maxWidth: "260px", height: "300px",
                         backgroundImage: 'url(' + movie.imageURL + ')',
                          backgroundSize: 'cover',backgroundPosition: "center"
                        }}>
                      
                                         
                    </Flex>
                      <Flex sx={{flexDirection: 'column', maxWidth: '260px', background: 'black', color: 'white'}}>
                            
                            <Paragraph sx={{padding: 10, fontSize: 1,
                                 minHeight: '40px',
                                 maxHeight: '100px',
                                  overflow: 'hidden'}} >{movie.summary}</Paragraph>
                            <Flex sx={{                            
                              width: '100%',
                               justifyContent: 'space-around',
                               padding: '10px',
                               marginBottom: '20px' }}>
                                <Button>accept</Button>
                                <Button>reject</Button>
                            </Flex>  
                      </Flex>
        </TinderCard>
      </Flex>
         
        )}
      </Flex>    
  
  )
}
export default MovieTinder;

