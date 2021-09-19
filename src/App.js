import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from './components/List';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Router>
    <Switch>
      <Route path='/' component={List} />
    </Switch>
    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
