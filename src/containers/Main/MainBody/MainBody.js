import React from 'react';
import { Box } from '@material-ui/core';
import PlotList from '../../../components/PlotList/PlotList';
import PlotSelection from '../../../components/PlotSelection/PlotSelection';

const MainBody = (props) => {
  return (
    <Box px='30px' py='15px' bgcolor='secondary.main'>
      <PlotSelection {...props} />
      <PlotList />
    </Box>
  );
}

export default MainBody;
