/** @jsxImportSource theme-ui */
import { Button, Flex, Paragraph } from 'theme-ui';

import { movies } from '../fake-api/fakeAPI';

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
                        position: "relative",  
                        width: "90vw",
                        maxWidth: "260px",
                        height: "300px",
                        backgroundImage: 'url(' + movie.imageURL + ')',                         
                        backgroundSize: 'cover',
                        backgroundPosition: "center"
                        }}>                                         
                    </Flex>
                      <Flex sx={cardBottom}>                            
                            <Paragraph sx={movieSummary} >{movie.summary}</Paragraph>
                            <Flex sx={buttonsWrapper}>
                                <Button sx={buttonAccept}
                                        onClick={() => handleAccept(movie.id)}><AiOutlineCheck sx={iconAccept}/> Accept</Button>
                                <Button sx={buttonDecline}
                                        onClick={() => handleReject(movie.id)}>Reject <AiOutlineClose sx={iconDecline}/></Button>
                            </Flex>  
                      </Flex>
        </TinderCard>
      </Flex>         
        )}
      </Flex>      
  )
};

export default MovieTinder;


const container: any = {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "100vh",
    width: '100vw',
    textAlign: 'center',
    overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: 'green'
};

const cardWrapper: any = {
    width: "90vw",
    maxWidth: "260px",
    height: "300px"
};   
    
const tindercard: any = {
    position: 'absolute',
    top: '10vh'
};  

const cardTop: any = {
    padding: 10,
    maxWidth: '260px',
    backgroundColor: 'black',
    color: 'white',
    borderTopRightRadius: '20px',
    fontWeight: 'bold'
};

const cardBottom: any = {
    flexDirection: 'column',
    maxWidth: '260px',
    background: 'black',
    color: 'white',
    borderBottomLeftRadius: '20px' };

const movieSummary: any = {
    padding: 10,
    fontSize: 1,
    minHeight: '40px',
    maxHeight: '100px',
    overflow: 'hidden'
}; 

const buttonsWrapper: any = {                            
    width: '100%',
    justifyContent: 'space-around',
    padding: '10px',
    marginBottom: '20px'
}; 

const buttonAccept: any = {
    cursor: 'pointer',
    background: 'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
    border: '1px solid green',
    paddingLeft: '10px',
    borderRadius: '20px',
    '&:hover, &:focus': {  
        backgroundPosition: 'right center', 
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: 'green'
     }
};   

const buttonDecline: any = {
    cursor: 'pointer',
    background: 'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
    border: '1px solid red',
    paddingRight: '10px',
    borderRadius: '20px',
    '&:hover, &:focus': {  
        backgroundPosition: 'right center', 
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: 'red'
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




// .btn-grad {background-image: linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)}
// .btn-grad {
//    margin: 10px;
//    padding: 15px 45px;
//    text-align: center;
//    text-transform: uppercase;
//    transition: 0.5s;
//    background-size: 200% auto;
//    color: white;            
//    box-shadow: 0 0 20px #eee;
//    border-radius: 10px;
//    display: block;
//  }

//  .btn-grad:hover {
//    background-position: right center; /* change the direction of the change here */
//    color: #fff;
//    text-decoration: none;
//  }
