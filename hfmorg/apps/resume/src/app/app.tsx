/** @jsxImportSource theme-ui */

import { Route, Link } from 'react-router-dom';
import Logo from './components/atoms/Logo';
import Nav from './components/Nav';
import { Container, Flex, ThemeProvider } from 'theme-ui';
import { defaultTheme } from './themes/theme';
import MobileNav from './components/MobileNav';
import { useEffect, useState } from 'react';
import ParticleBackground, { particleOptions } from './components/ParticleBackground';
import Particles from 'react-tsparticles';


export function App() {
const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 820; 
 
  
  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);    
   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);

  return (
 <ThemeProvider theme={defaultTheme}>
     <Container id="app-container" sx={{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
    }}>
     
      {/* <Flex id="header-container" sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}> */}
                  {/* <ParticleBackground /> */}

        <Logo text1={'my'} text2={'resume'} />         
        {width > breakPoint ? (<Nav />) : (<MobileNav />)}
        {/* </Flex> */}

        <Flex id="showarea-container" sx={{
          width: '100%',
          // minHeight: '100vh',
          // position: 'absolute',
          zIndex: '-2',
          top: '65px',
          backgroundColor: 'black'
        }}>
           <ParticleBackground />
           
          
        </Flex>
         
      </Container>
  </ThemeProvider>



  );
}

export default App;
