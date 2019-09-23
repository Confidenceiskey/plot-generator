import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import DeleteButton from '../Buttons/DeleteButton';

const ResourceTitle = styled(Typography)({
  fontSize: '22px',

  '@media (min-width: 451px) and (max-width: 600px)': {
    fontSize: '18px'
  },
  '@media (max-width: 450px)': {
    fontSize: '16px'
  }
});

const CustomBox = styled(Box)({
  '@media (max-width: 600px)': {
    paddingLeft: '50px'
  }
})

// Height of each list row & width for the delete sign on right side
const size = '60px';

const PlotList = (props) => {
  const { resourceName } = props;
  return (
    <Box display='flex'>
      {/* Left Side: Resource name */}
      <CustomBox 
        display='flex' 
        flexGrow={1} 
        height={size} 
        alignItems='center'
        pl= '100px'
      >
        <ResourceTitle>{resourceName}</ResourceTitle>
      </CustomBox>

      {/* Right Side: 'delete' Sign */}
      <Box 
        display='flex' 
        width={size} 
        height={size} 
        alignItems='center'
        justifyContent='center'
      >
        <DeleteButton {...props} />
      </Box>
    </Box>
  );
}

export default PlotList;
