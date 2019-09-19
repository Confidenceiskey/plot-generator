import React from 'react';
import { Box, FormControl, Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { mainStyles } from '../../../../../styles/GlobalStyles/GlobalStyles';

const { primaryDark } = mainStyles;
const rowWidth = '42px';

const BlackRadio = withStyles({
  root: {
    color: '#9e9e9e',
    '&$checked': {
      color: primaryDark,
    },
  },
  checked: {},
})(props => <Radio {...props} />);


const StepRow = () => {

  const handleChange = (e) => {
    console.log('click');
  }

  return (
    <FormControl component='fieldset' inputprops={{ 'aria-label': 'Group' }} fullWidth={true}>
      <Box display='flex' alignItems='center'>
        <Box width={rowWidth} textAlign='center'>
          <BlackRadio
            onChange={handleChange}
            value='a'
            name='radio-button-demo'
            inputProps={{ 'aria-label': 'A' }}
          />
        </Box>
        <Box flex={1} pl='5px'>beeed</Box>
        <Box width={rowWidth} textAlign='center'>
          <BlackRadio
            onChange={handleChange}
            value='b'
            name='radio-button-demo'
            inputProps={{ 'aria-label': 'B' }}
          />
        </Box>
        <Box flex={1} pl='5px'>deeeed</Box>
        <Box width={rowWidth}>X</Box>
      </Box>
    </FormControl>
  );
}

export default StepRow;
