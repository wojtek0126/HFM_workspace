/** @jsxImportSource theme-ui */
import { ThemeUICSSObject } from 'theme-ui'
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
  accepted?: boolean,
  rejected?: boolean
};


const MovieTinder = () => {
  const [lastDirection, setLastDirection] = useState<string | null>();
  const api = '/api/movies';

    const [allMovies, setAllMovies] = useState<Movies[] | null>();

    useEffect(() => {  
      fetchData( setAllMovies, api);
    }, []);

    async function fetchData(setCallback: React.Dispatch<React.SetStateAction<Movies[] | null | undefined>>, API: string) {   
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

  const handleAccept = (id: string, movie: Movies) => {
    const acceptData: Movies = { ...movie,
    accepted: true, 
    rejected: false 
  };  
    updateMovies(api, id, acceptData);
  };

  const handleReject = (id: string, movie: Movies) => {
    const rejectData: Movies = { ...movie,
      accepted: false, 
      rejected: true 
    };  
      updateMovies(api, id, rejectData);
  };

  const swiped = (direction: string, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (id: string, movie: Movies) => {
    const rejectData: Movies = { ...movie,
      accepted: false, 
      rejected: true 
    };  
      updateMovies(api, id, rejectData);
  };


  return (<>
    <Flex sx={titleContainer}>ChozzAndWatch</Flex>

    <Flex sx={container}>
      {allMovies && allMovies.map((movie: Movies) => (
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
                backgroundSize: '80% 100%',
                backgroundColor: 'backgroundCard',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '@media (max-width: 800px)': {
                  backgroundSize: '85% 110%',
                  height: '230px',
                },
                '@media (max-height: 450px)': {
                  backgroundSize: '90% 200%',
                  height: '100px',
                  top: "-25px"
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

const buttonBackground =
  'linear-gradient(to right, rgba(35, 37, 38, 0.7) 0%, rgba(65, 67, 69, 0.7)  51%, rgba(35, 37, 38, 0.7)  100%)';
const buttonClickedBackground =
  'linear-gradient(to right, rgba(35, 37, 38, 0.9) 0%, rgba(65, 67, 69, 0.9)  51%, rgba(35, 37, 38, 0.9)  100%)';
const borderRadiusStandard = '20px';
const desktopWidth = '300px';

const titleContainer: ThemeUICSSObject = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    fontSize: 40,
    backgroundColor: 'backgroundTitle'
    };

const container: ThemeUICSSObject = {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100vw',
  textAlign: 'center',
  overflow: 'hidden',
  flexDirection: 'column',
  backgroundColor: 'background',
  '@media (min-width: 800px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
};

const cardWrapper: ThemeUICSSObject = {
  width: '90vw',
  maxWidth: desktopWidth,
  height: '580px',
  margin: 10,
};

const tindercard: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  padding: "25px 0",
  '@media (max-width: 800px)': {
    position: 'absolute',
    top: 20,
    zIndex: 10,  
    '@media (max-height: 450px)': {   
      top: "-25px"
    },
  },
};

const cardTop: ThemeUICSSObject = {
  textAlign: 'center',
  fontSize: '15px',
  padding: 10,
  height: '60px',
  overflow: 'hidden',
  maxWidth: desktopWidth,
  backgroundColor: 'backgroundCard',
  color: 'textCard',
  borderTopRightRadius: borderRadiusStandard,
  fontWeight: 'bold',
};

const cardBottom: ThemeUICSSObject = {
  flexDirection: 'column',
  maxWidth: desktopWidth,
  backgroundColor: 'backgroundCard',
  color: 'textCard',
  borderBottomLeftRadius: borderRadiusStandard,
};

const movieSummary: ThemeUICSSObject = {
  padding: '0px 10px',
  fontSize: '10px',
  minHeight: '80px',
  maxHeight: '80px',
  overflow: 'hidden',
  marginTop: '10px',
};

const buttonsWrapper: ThemeUICSSObject = {
  width: '100%',
  justifyContent: 'space-around',
  padding: '10px',
  marginBottom: '20px',
};

const buttonAccept: ThemeUICSSObject = {
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
    color: 'colorBtnHover',
    textDecoration: 'none',
    background: buttonClickedBackground,
  },
};

const buttonDecline: ThemeUICSSObject = {
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
    color: 'colorBtnHover',
    textDecoration: 'none',
    background: buttonClickedBackground,
  },
};

const iconAccept: ThemeUICSSObject = {
  paddingTop: 1,
  color: 'colorReject',
};

const iconDecline: ThemeUICSSObject = {
  paddingTop: 1,
  color: 'colorAccept',
};
