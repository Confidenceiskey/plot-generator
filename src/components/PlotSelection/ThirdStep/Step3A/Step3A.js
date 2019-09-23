import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import AddButton from '../../../Buttons/AddButton';
import SearchBar from '../../../SearchBar/SearchBar';
import SelectionTitle from '../../../SelectionTitle/SelectionTitle';

const CustomBox = styled(Box)({
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Step3A = (props) => {
  const { singularResourceLC, plotButtonClick } = props;
  return (
    <Fragment>
      {/* Step 3a: if user is searching on their own */}
      <SelectionTitle text={`3. Search for a ${singularResourceLC}, then add to plot`} /> 
      <CustomBox display='flex' flexDirection='row'>
        <SearchBar {...props} />
        <AddButton onClick={plotButtonClick} text='Add To Plot' outline />
      </CustomBox>
    </Fragment>
  );
}

export default Step3A;
