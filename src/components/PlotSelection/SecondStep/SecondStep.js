import React from 'react';
import { Box } from '@material-ui/core';
import ThirdStep from '../ThirdStep/ThirdStep';
import SelectRadio from '../../SelectRadio/SelectRadio';
import SelectionTitle from '../../SelectionTitle/SelectionTitle';

const SecondStep = (props) => {
  const { option } = props;
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {/* Step 2 Portion */}
      <SelectionTitle text='2. Select an option' /> 
      <SelectRadio {...props} />
      <Box pt='20px'>
        { /* If no selection is made, don't render Step 3 */
          option !== '' ? <ThirdStep {...props} /> : null
        }
      </Box>
    </Box>
  );
}

export default SecondStep;
