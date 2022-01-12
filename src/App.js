import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import List from './components/List';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
    <CssBaseline/>
    <Router>
    <Switch>
      <Route path='/' component={List} />
    </Switch>
    </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
