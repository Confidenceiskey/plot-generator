import React from 'react';
import { Box } from '@material-ui/core';
import AsyncSelect from 'react-select/async';

// const searchResults = (searchSuggestions, searchValue) => {
//     if (searchValue !== "") {
//       return searchSuggestions;
//     } else {
//       return;
//     }
//   };

// const loadOptions = (searchSuggestions, searchValue, callback) => {
//   setTimeout(() => {
//     callback(searchResults(searchSuggestions, searchValue));
//   }, 0);
// };

const customMessage = (searchValue) => {
  if (searchValue.inputValue !== '') {
    return 'No results found!';
  } else {
    return null;
  }
}

const SearchBar = ({ onSearchChange, searchValue, loadOptions, searchResults, searchSuggestions }) => {
  return (
    <Box width='225px'>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        placeholder='Search...'
        noOptionsMessage={customMessage}
        onInputChange={onSearchChange}
      />
    </Box>
  );
}

export default SearchBar;


            /* <input 
              name='searchBar' 
              placeholder='Search for resource' 
              onChange={onSearchChange} 
              value={searchValue}
            /> */