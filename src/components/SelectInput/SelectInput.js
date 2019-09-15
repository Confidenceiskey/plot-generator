import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { mainStyles } from '../../styles/GlobalStyles/GlobalStyles';

const { primaryLight } = mainStyles;

const CustomFormControl = withStyles({
  root: {
    minWidth: '275px',
    maxWidth: '275px'
  }
})(FormControl);

const CustomInputLabel = withStyles({
  outlined: {
    background: primaryLight,
    padding: '1px 5px'
  },
  root: {
    color: '#9e9e9e'
  }
})(InputLabel);

const CustomSelect = withStyles({
  select: {
    '&:focus': {
      background: primaryLight
    }
  }
})(Select);

const SelectInput = (props) => {
  const inputLabel = React.useRef(null);
  return (
    <form autoComplete='off'>
      <CustomFormControl variant="outlined"> 
        <CustomInputLabel ref={inputLabel} htmlFor="outlined-resources">
          Resource
        </CustomInputLabel>
        <CustomSelect 
          value={props.resource ? props.resource : ''} 
          onChange={props.onChange} 
          inputProps={{ name: 'resources', id: 'outlined-resources'}}
        >
          <MenuItem value='Characters'>Characters</MenuItem>
          <MenuItem value='Planets'>Planets</MenuItem>
        </CustomSelect>
      </CustomFormControl>
    </form>
  );
}

export default SelectInput;
