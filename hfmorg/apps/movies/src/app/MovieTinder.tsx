/** @jsxImportSource theme-ui */
import { Button, Flex, Paragraph } from 'theme-ui';

import { movies } from '../fake-api/fakeAPI';

import cinema from '../assets/cinema.jpg'

import TinderCard from 'react-tinder-card';

import { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
interface Movies {
    id: string;
    imageURL: string;
    title: string;
    summary: string;
    rating: number;
};

const MovieTinder = () => {
  const moviesAPI: Movies[] = movies;
  const [lastDirection, setLastDirection] = useState();

//   const [allMovies, setAllMovies] = useState<Movies[]>();

//   useEffect(() => {
//    fetch('api/movies')
//    .then((_) => _.json)
//    .then((data: any) => setAllMovies(data))
//   }, []);

  const handleAccept = (id: string) => {
    console.log(`movie with id ${id} accepted by user`);
  };

  const handleReject = (id: string) => {
    console.log(`movie with id ${id} rejected by user`);
  };

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!');
  };
  
  return (   
      <Flex sx={container}>
      {moviesAPI.map((movie: any) =>
      <Flex sx={cardWrapper}>
        <TinderCard sx={tindercard}
                    key={movie.title}
                    onSwipe={(dir) => swiped(dir, movie.title)}
                    onCardLeftScreen={() => outOfFrame(movie.title)}>
                    <Paragraph sx={cardTop} >{`${movie.title}(${movie.rating}/10)`}</Paragraph>
                    <Flex sx={{
                        width: "90vw",
                        maxWidth: desktopWidth,
                        height: "500px",
                        backgroundImage: 'url(' + movie.imageURL + ')',                         
                        backgroundSize: 'contain',
                        backgroundColor: 'black',
                        backgroundPosition: "center",
                        backgroundRepeat: 'no-repeat',
                        "@media (max-width: 800px)": { 
                         height: "360px"             
                          },
                          "@media (max-height: 450px)": { 
                            height: "100px",                                     
                             }
                        }}> 
                   </Flex>
                      <Flex sx={cardBottom}>                            
                            <Paragraph sx={movieSummary} >{movie.summary}</Paragraph>
                            <Flex sx={buttonsWrapper}>
                                <Button sx={buttonAccept}
                                        onClick={() => handleAccept(movie.id)}><AiOutlineCheck sx={iconAccept}/>Accept</Button>
                                <Button sx={buttonDecline}
                                        onClick={() => handleReject(movie.id)}>Decline<AiOutlineClose sx={iconDecline}/></Button>
                            </Flex>  
                      </Flex>
        </TinderCard>
      </Flex>         
        )}
      </Flex>      
  )
};

export default MovieTinder;


const buttonBackground: string = 'linear-gradient(to right, rgba(35, 37, 38, 0.7) 0%, rgba(65, 67, 69, 0.7)  51%, rgba(35, 37, 38, 0.7)  100%)';
const buttonClickedBackground: string = 'linear-gradient(to right, rgba(35, 37, 38, 0.9) 0%, rgba(65, 67, 69, 0.9)  51%, rgba(35, 37, 38, 0.9)  100%)';
const borderRadiusStandard: string = '20px';
const desktopWidth: string = '300px';

const container: any = {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "100vh",
    width: '100vw',
    textAlign: 'center',
    overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: '#fff', 
    "@media (min-width: 800px)": { 
     flexDirection: 'row',
     flexWrap: 'wrap',  
     alignItems: 'flex-start',  
      }
};

const cardWrapper: any = {
    width: "90vw",
    maxWidth: desktopWidth,
    height: "580px",
    margin: 10,
};   
    
const tindercard: any = {    
    display: 'flex',
    flexDirection: 'column',   
    "@media (max-width: 800px)": { 
        position: 'absolute',
        top:'20px', 
        zIndex: 10             
      }
};  

const cardTop: any = {
    textAlign: 'center',
    fontSize: '15px',
    padding: 10,
    height: '60px',
    overflow: 'hidden',
    maxWidth: desktopWidth,
    backgroundColor: 'black',
    color: 'white',
    borderTopRightRadius: borderRadiusStandard,
    fontWeight: 'bold'
};

const cardBottom: any = {
    flexDirection: 'column',
    maxWidth: desktopWidth,
    background: 'black',
    color: 'white',
    borderBottomLeftRadius: borderRadiusStandard
 };

const movieSummary: any = {
    padding: "0px 10px",
    fontSize: "10px",
    minHeight: '80px',
    maxHeight: '80px',
    overflow: 'hidden',
    marginTop: '10px'
}; 

const buttonsWrapper: any = {                            
    width: '100%',
    justifyContent: 'space-around',
    padding: '10px',
    marginBottom: '20px'
}; 

const buttonAccept: any = {
    cursor: 'pointer',
    background: buttonBackground,
    border: '1px solid green',
    paddingLeft: '10px',
    width: '104px',
    height: '40px',
    borderTopLeftRadius: borderRadiusStandard,
    borderBottomRightRadius: borderRadiusStandard,
    '&:hover, &:focus': {  
        backgroundPosition: 'right center', 
        color: '#fff',
        textDecoration: 'none',
        background: buttonClickedBackground
     }
};   

const buttonDecline: any = {  
    cursor: 'pointer',
    background: buttonBackground,
    border: '1px solid red',
    paddingRight: '10px',
    width: '104px',
    height: '40px',
    borderTopRightRadius: borderRadiusStandard,
borderBottomLeftRadius: borderRadiusStandard,
    '&:hover, &:focus': {  
        backgroundPosition: 'right center', 
        color: '#fff',
        textDecoration: 'none',
        background: buttonClickedBackground
     }
};

const iconAccept: any = {
    paddingTop: 1,
    color: 'green'
};

const iconDecline: any = {
    paddingTop: 1,
    color: 'red'
};





