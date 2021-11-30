/** @jsxImportSource theme-ui */

import { Route, Link } from 'react-router-dom';
import Logo from './components/atoms/Logo';
import Nav from './components/Nav';
import { Container, Flex, ThemeProvider } from 'theme-ui';
import { defaultTheme } from './themes/theme';
import MobileNav from './components/MobileNav';
import { useEffect, useState } from 'react';


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
     <Container sx={{
      maxWidth: '100%',      
    }}>
     
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}>
        
        <Logo text1={'my'} text2={'resume'} />         
                  {width > breakPoint ? (<Nav />) : ( <MobileNav />)}      
      </Flex>
    </Container>
  </ThemeProvider>



  );
}

export default App;
