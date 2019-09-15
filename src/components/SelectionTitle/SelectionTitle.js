import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const StepHeading = styled(Typography)({
  fontWeight: 500,

  '@media (min-width: 561px) and (max-width: 750px)': {
      fontSize: '3.2vw'
    },
  '@media (min-width: 360px) and (max-width: 560px)': {
    fontSize: '18px'
  },
  '@media (max-width: 359px)': {
    fontSize: '16px'
  }
});

const SelectionTitle = ({ text }) => {
  return (
    <Box display='flex' flexDirection='column' pb='12px'>
      <StepHeading variant='h5' color='primary'>{text}</StepHeading> 
    </Box>
  );
}

export default SelectionTitle;
