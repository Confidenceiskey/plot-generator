import React from 'react';
import { Box } from '@material-ui/core';
import Main from './Main/Main';

function App() {
  return (
    <Box 
      display='flex' 
      justifyContent='center' 
      alignItems='center' 
      height='80vh'
    >
      <Main />
    </Box>
  );
}

export default App;
