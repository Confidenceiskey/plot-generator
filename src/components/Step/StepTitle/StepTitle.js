import React, { Fragment } from 'react';
import { styled } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const SubHeading = styled(Typography)({
  padding: '5px 10px',
  color: '#757575'
});

const StepTitle = ({ stepHeading, stepSubHeading }) => {
  return (
    <Fragment>
      <Typography variant='h5' color='primary'>
        {stepHeading}
      </Typography>
      <SubHeading variant='subtitle2'>
        {stepSubHeading}
      </SubHeading>
    </Fragment>
  );
}

export default StepTitle;
