import React from 'react';
import { Box } from '@material-ui/core';
import Step3A from './Step3A/Step3A';
import Step3B from './Step3B/Step3B';

const ThirdStep = (props) => {
  const { resource, option } = props;
  const singularResourceLC = resource.toLowerCase().slice(0, -1);
  
  const step3AB = option === 'search' ?
    <Step3A singularResourceLC={singularResourceLC} {...props} /> :
    <Step3B singularResourceLC={singularResourceLC} {...props} />

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {step3AB}
    </Box>
  );
}

export default ThirdStep;
