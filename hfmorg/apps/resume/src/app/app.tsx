/** @jsxImportSource theme-ui */

import { Route, Link } from 'react-router-dom';
import Logo from './components/atoms/Logo';
import Nav from './components/Nav';
import { ThemeProvider } from 'theme-ui';
import { defaultTheme } from './themes/theme';
import MobileNav from './components/MobileNav';


export function App() {
  return (
 <ThemeProvider theme={defaultTheme}>
     <div sx={{
      maxWidth: '100%',      
    }}>
     
      <section sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}>
        
        <Logo text1={'my'} text2={'resume'} />
         
          {/* <Nav /> */}
          <MobileNav />
      
      </section>

    </div>
  </ThemeProvider>



  );
}

export default App;
