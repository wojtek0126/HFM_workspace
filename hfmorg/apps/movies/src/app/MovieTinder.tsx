/** @jsxImportSource theme-ui */
import { Button, Flex, Paragraph } from 'theme-ui';

import TinderCard from 'react-tinder-card';

import { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
interface Movies {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
  accept?: boolean,
  reject?: boolean
};

type Styles = {
  [key: string]: any;
};

const MovieTinder = () => {
  const [lastDirection, setLastDirection] = useState();
  const api = '/api/movies';

    const [allMovies, setAllMovies] = useState<Movies[] | null>();

    useEffect(() => {  
      fetchData( setAllMovies, api);
    }, []);

    async function fetchData(setCallback: any, API: string) {   
      await fetch(API, {
          mode: "cors",
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      })
      .then(response => {
          return response.json();        
      })
      .then(data => {        
          setCallback(data);
      })
      .catch(error => {
          console.log(error);
      });
          }; 
          
   
          async function updateMovies(API: string, id: string, data: Movies) {   
            await fetch(`${API}/${id}`, {
                mode: "cors",
                method: "PUT",
                 headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            })
            .then(response => {
                return response.json();        
            })
            .then(data => {        
                return data;
            })
            .catch(error => {
                console.log(error);
            });
                }; 

  const handleAccept = (id: string, movie: any) => {
    let acceptData: any = { ...movie,
    accepted: true, 
    rejected: false 
  };  
    updateMovies(api, id, acceptData);
  };

  const handleReject = (id: string, movie: any) => {
    let rejectData: any = { ...movie,
      accepted: false, 
      rejected: true 
    };  
      updateMovies(api, id, rejectData);
  };

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (id: any, movie: any) => {
    let rejectData: any = { ...movie,
      accepted: false, 
      rejected: true 
    };  
      updateMovies(api, id, rejectData);
  };


  return (<>
    <Flex sx={titleContainer}>ChozzAndWatch</Flex>
    <Flex sx={container}>
      {allMovies && allMovies!.map((movie: any) => (
        <Flex sx={cardWrapper} key={movie.id}>
          <TinderCard
            sx={tindercard}            
            onSwipe={(dir) => swiped(dir, movie.title)}
            onCardLeftScreen={() => outOfFrame(movie.id, movie)}
          >
            <Paragraph
              sx={cardTop}
            >{`${movie.title}(${movie.rating}/10)`}</Paragraph>
            <Flex
              sx={{
                width: '90vw',
                maxWidth: desktopWidth,
                height: '500px',
                backgroundImage: 'url(' + movie.imageURL + ')',
                backgroundSize: 'contain',
                backgroundColor: 'black',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '@media (max-width: 800px)': {
                  height: '360px',
                },
                '@media (max-height: 450px)': {
                  height: '100px',
                },
              }}
            ></Flex>
            <Flex sx={cardBottom}>
              <Paragraph sx={movieSummary}>{movie.summary}</Paragraph>
              <Flex sx={buttonsWrapper}>
                <Button
                  sx={buttonAccept}
                  onClick={() => handleAccept(movie.id, movie)}
                >
                  <AiOutlineCheck sx={iconAccept} />
                  Accept
                </Button>
                <Button
                  sx={buttonDecline}
                  onClick={() => handleReject(movie.id, movie)}
                >
                  Decline
                  <AiOutlineClose sx={iconDecline} />
                </Button>
              </Flex>
            </Flex>
          </TinderCard>
        </Flex>
      ))}
    </Flex>
  </>);
};

export default MovieTinder;

const buttonBackground: string =
  'linear-gradient(to right, rgba(35, 37, 38, 0.7) 0%, rgba(65, 67, 69, 0.7)  51%, rgba(35, 37, 38, 0.7)  100%)';
const buttonClickedBackground: string =
  'linear-gradient(to right, rgba(35, 37, 38, 0.9) 0%, rgba(65, 67, 69, 0.9)  51%, rgba(35, 37, 38, 0.9)  100%)';
const borderRadiusStandard: string = '20px';
const desktopWidth: string = '300px';

const titleContainer: Styles = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    fontSize: 40,
    backgroundColor: 'gold'
    };

const container: Styles = {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100vw',
  textAlign: 'center',
  overflow: 'hidden',
  flexDirection: 'column',
  backgroundColor: 'darkgoldenrod',
  '@media (min-width: 800px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
};

const cardWrapper: Styles = {
  width: '90vw',
  maxWidth: desktopWidth,
  height: '580px',
  margin: 10,
};

const tindercard: Styles = {
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 800px)': {
    position: 'absolute',
    top: 10,
    zIndex: 10,
  },
};

const cardTop: Styles = {
  textAlign: 'center',
  fontSize: '15px',
  padding: 10,
  height: '60px',
  overflow: 'hidden',
  maxWidth: desktopWidth,
  backgroundColor: 'black',
  color: 'white',
  borderTopRightRadius: borderRadiusStandard,
  fontWeight: 'bold',
};

const cardBottom: Styles = {
  flexDirection: 'column',
  maxWidth: desktopWidth,
  background: 'black',
  color: 'white',
  borderBottomLeftRadius: borderRadiusStandard,
};

const movieSummary: Styles = {
  padding: '0px 10px',
  fontSize: '10px',
  minHeight: '80px',
  maxHeight: '80px',
  overflow: 'hidden',
  marginTop: '10px',
};

const buttonsWrapper: Styles = {
  width: '100%',
  justifyContent: 'space-around',
  padding: '10px',
  marginBottom: '20px',
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
    background: buttonClickedBackground,
  },
};

const buttonDecline: Styles = {
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
    background: buttonClickedBackground,
  },
};

const iconAccept: Styles = {
  paddingTop: 1,
  color: 'green',
};

const iconDecline: Styles = {
  paddingTop: 1,
  color: 'red',
};
