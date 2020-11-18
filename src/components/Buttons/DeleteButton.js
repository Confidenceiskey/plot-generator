import React from 'react';
import { Box, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import trash from '../../assets/trash.svg';

const DeleteIcon = withStyles({
  root: {
    background: '#9e9e9e',
    height: '22px',
    width: '22px',
    cursor: 'pointer',
    mask: `url(${trash})`,

    '&:hover': {
      background: '#1c1b1b'
    }
  }
})(props => <CardMedia {...props} />);

const DeleteButton = ({ pr = '0px', onDelete, pos }) => {
  return (
    <Box display='flex' pr={pr}>
      <DeleteIcon pos={pos} onClick={() => onDelete(pos)} title='Delete' src={trash} />
    </Box>
  );
}

export default DeleteButton;
