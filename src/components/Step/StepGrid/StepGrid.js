import React, { Fragment } from 'react';
import GridBody from './GridBody/GridBody';
import GridFooter from './GridFooter/GridFooter';

const StepGrid = (props) => {
  return (
    <Fragment>
      <GridBody />
      <GridFooter {...props} />
    </Fragment>
  );
}

export default StepGrid;
