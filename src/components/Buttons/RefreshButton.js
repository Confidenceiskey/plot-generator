import React from 'react';
import { Box, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import refresh from '../../assets/refresh.svg';

const RefreshIcon = withStyles({
  root: {
    background: '#9e9e9e',
    height: '35px',
    width: '35px',
    borderRadius: '50%',
    cursor: 'pointer',
    mask: `url(${refresh})`,

    '&:hover': {
      background: '#1c1b1b'
    }
  }
  
})(props => <CardMedia {...props} />);

const RefreshButton = ({ pr }) => {
  return (
    <Box display='flex' pr={pr}>
      <RefreshIcon title='Generate new' src={refresh} />
    </Box>
  );
}

export default RefreshButton;
