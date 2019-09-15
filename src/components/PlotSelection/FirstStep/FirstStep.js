import React from 'react';
import { Box } from '@material-ui/core';
import SelectInput from '../../SelectInput/SelectInput';
import SelectionTitle from '../../SelectionTitle/SelectionTitle';

const FirstStep = (props) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' pb='32px'>
      <SelectionTitle text='1. Choose resource type' /> 
      <SelectInput {...props} />
    </Box>
  );
}

export default FirstStep;
