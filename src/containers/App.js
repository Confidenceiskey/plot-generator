import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Main from './Main/Main';

const styles = theme => ({
  "@global": {
    body: {
      background: 'linear-gradient(#434343, #000000)',
      minHeight: '100vh'
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
