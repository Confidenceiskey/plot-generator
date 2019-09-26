import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Main from './Main/Main';

const styles = theme => ({
  "@global": {
    body: {
      background: 'radial-gradient(circle 400px at 25% 20%, #1591ac 6%, #14859f 16%, #106b7f 30%, #0b4856 47%, #093d49 52.6%, #8edff1 53%, #6dd5ed 68%, #2193b0 104%, transparent 180%), radial-gradient(circle 150px at 85% 80%, #fff 25%, #1c1b1b 45%, transparent 60%), radial-gradient(circle 20px at 90% 15%, #fff 5%, #1c1b1b 18%)',
      minHeight: '100vh',
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',

      '@media(max-width: 980px)': {
        background: 'radial-gradient(circle 400px at 25% 20%, #1591ac 5%, #14859f 14%, #106b7f 24%, #0b4856 34%, #093d49 38.6%, #8edff1 39%, #6dd5ed 45%, #2193b0 70%, transparent 98%), radial-gradient(circle 150px at 85% 80%, #fff 25%, #1c1b1b 45%, transparent 60%), radial-gradient(circle 20px at 90% 15%, #fff 5%, #1c1b1b 18%)'
      }
    }
  }
});

function App() {
  return (
    <Box 
      display='flex' 
      justifyContent='center' 
      alignItems='center'
      minHeight='520px' 
    >
      <Main />
    </Box>
  );
}

export default withStyles(styles)(App);
