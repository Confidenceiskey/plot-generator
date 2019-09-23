import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Main from './Main/Main';

const styles = theme => ({
  "@global": {
    body: {
      background: 'linear-gradient(#434343, #000000)',
      minHeight: '100vh',
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
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
