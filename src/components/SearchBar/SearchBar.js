import React from 'react';
import { Box } from '@material-ui/core';
import AsyncSelect from 'react-select/async';

const SearchBar = ({ 
  onTextChange, 
  suggestionResults, 
  customDropdownMessage,
}) => {
  return (
    <Box display='flex' alignItems='center'>
      <Box width='225px'>
        <AsyncSelect
          loadOptions={suggestionResults}
          placeholder='Search...'
          noOptionsMessage={customDropdownMessage}
          onChange={onTextChange}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
