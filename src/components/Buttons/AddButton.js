import React from 'react';
import { Box, Button } from '@material-ui/core';

const AddButton = (props) => {
  const { text, onClick } = props;
  return (
    <Box mx='10px'>
      <Button onClick={onClick} variant='outlined' color='primary' size='large'>
        {text}
      </Button>
    </Box>
  );
}

export default AddButton;
