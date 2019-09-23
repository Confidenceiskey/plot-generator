import React from 'react';
import { Box } from '@material-ui/core';
import MainBodyLower from './MainBodyLower/MainBodyLower';
import MainBodyUpper from './MainBodyUpper/MainBodyUpper';

const MainBody = (props) => {
  return (
    <Box>
      <MainBodyUpper {...props} />
      <MainBodyLower {...props} />
    </Box>
  );
}

export default MainBody;
