import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import AddButton from '../../../Buttons/AddButton';
import QueryResultBox from '../../../QueryResultBox/QueryResultBox';
import RefreshButton from '../../../Buttons/RefreshButton';
import SelectionTitle from '../../../SelectionTitle/SelectionTitle';

const CustomBox = styled(Box)({
  '@media (max-width: 600px)': {
    flexDirection: 'column'
  }
});

const Step3B = (props) => {
  const { singularResourceLC, plotButtonClick } = props;
  return (
    <Fragment>
      {/* Step 3b: if user wants random resource generated */}
      <SelectionTitle text={`3. Find a ${singularResourceLC}, then add to plot`} /> 
      <CustomBox display='flex' alignItems='center' mt='5px'>
        <Box display='flex' alignItems='center' mb='15px'>
          <RefreshButton pr='10px' {...props} />
          <QueryResultBox {...props} />
        </Box>
        <AddButton onClick={plotButtonClick} text='Add To Plot' outline />
      </CustomBox>
    </Fragment>
  );
}

export default Step3B;
