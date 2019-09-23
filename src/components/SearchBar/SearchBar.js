import React from 'react';
import { Box } from '@material-ui/core';
import AsyncSelect from 'react-select/async';

const SearchBar = ({ 
  onSelectChange, 
  suggestionResults, 
  customDropdownMessage,
  onTextChange
}) => {
  return (
    <Box display='flex' alignItems='center' mb='15px'>
      <Box width='225px'>
        <AsyncSelect
          loadOptions={suggestionResults}
          placeholder='Search...'
          noOptionsMessage={customDropdownMessage}
          onChange={onSelectChange}
          onInputChange={onTextChange}
          isClearable
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
