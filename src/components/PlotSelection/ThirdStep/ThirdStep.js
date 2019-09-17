import React, {Fragment} from 'react';
import { Box } from '@material-ui/core';
import AddButton from '../../Buttons/AddButton';
import RefreshButton from '../../Buttons/RefreshButton';
import SearchBar from '../../SearchBar/SearchBar';
import SelectionTitle from '../../SelectionTitle/SelectionTitle';

const ThirdStep = (props) => {
  const { resource, option } = props;
  const singularResourceLC = resource.toLowerCase().slice(0, -1);
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {
        option === 'search' ? (

          /* Step 3a: if user is searching on their own */
          <Fragment>
            <SelectionTitle text={`3. Search for a ${singularResourceLC}, then add to plot`} /> 
            <Box display='flex' flexDirection='row'>
              <SearchBar {...props} />
              <AddButton text='Add To Plot' outline />
            </Box>
          </Fragment>
        ) : (

          /* Step 3b: if user wants random resource generated */
          <Fragment>
            <SelectionTitle text={`3. Find ${singularResourceLC}, then add to plot`} /> 
            <Box display='flex' alignItems='center' mt='5px'>
              <RefreshButton pr='10px'/>
              <Box px='10px'>Search Result</Box>
              <AddButton text='Add To Plot' outline />
            </Box>
          </Fragment>
        )
      }
    </Box>
  );
}

export default ThirdStep;
