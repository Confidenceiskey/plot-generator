import React from 'react';
import { Box } from '@material-ui/core';
import PlotSelection from '../../../../components/PlotSelection/PlotSelection';

const MainBodyUpper = (props) => {
  return (
    <Box px='30px' py='15px' bgcolor='secondary.main'>
        <PlotSelection {...props} />
    </Box>
  );
}

export default MainBodyUpper;
