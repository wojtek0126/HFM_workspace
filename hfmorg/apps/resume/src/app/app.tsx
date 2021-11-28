import { Route, Link } from 'react-router-dom';
import Logo from './components/atoms/Logo';
import Nav from './components/Nav';

export function App() {
  return (
    <div style={{
      maxWidth: '100%',      
    }}>
     
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}>
        
      <Logo />
         
     <Nav />
      
      </section>

    </div>
  );
}

export default App;
