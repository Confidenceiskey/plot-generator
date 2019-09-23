import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const ErrorMessage = styled(Typography)({
  fontWeight: '500',
  background: '#ffcdd2',
  padding: '5px 10px',
  borderRadius: '5px',
  border: '1px solid #ef9a9a'
});

const ErrorBox = ({ errorMsg }) => {
  return (
    <Box my='15px'>
      <ErrorMessage variant='body2' color='error'>{errorMsg}</ErrorMessage>
    </Box>
  );
}

export default ErrorBox;
