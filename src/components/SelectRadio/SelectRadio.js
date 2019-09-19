import React from 'react';
import { Box, FormControl, Radio, RadioGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { mainStyles } from '../../styles/GlobalStyles/GlobalStyles';

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
})(Radio);

const SelectRadio = ({ option, onChange }) => {
  return (
    <FormControl component='fieldset' inputprops={{ 'aria-label': 'radioGroup' }}>
      <RadioGroup 
        aria-label='searchOptions' 
        name='searchOptions'
        value={option} 
        onChange={onChange} 
        row
      >
        <Box display='flex' alignItems='center' pb='12px'>
          <Box width={rowWidth} textAlign='center'>
            <BlackRadio
              value='search'
              name='option1'
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Box>
          <Box pl='5px' pr='30px'>Search yourself</Box>
          <Box width={rowWidth} textAlign='center'>
            <BlackRadio
              value='random'
              name='option2'
              inputProps={{ 'aria-label': 'Random' }}
            />
          </Box>
          <Box pl='5px'>Generate random</Box>
        </Box>
      </RadioGroup>
    </FormControl>
  );
}

export default SelectRadio;
