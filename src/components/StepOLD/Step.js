import React, { Fragment } from 'react';
import StepGrid from './StepGrid/StepGrid';
import StepTitle from './StepTitle/StepTitle';

const Step = (props) => {
  return (
    <Fragment>
      <StepTitle {...props} />
      <StepGrid {...props} />
    </Fragment>
  );
}

export default Step;
