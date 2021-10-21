/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { defaultTheme } from '../themes/theme';

import MovieTinder from './MovieTinder';

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <MovieTinder /> 
    </ThemeProvider>
  )
};

export default App;

