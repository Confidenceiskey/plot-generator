import React from 'react';
import { Box } from '@material-ui/core';
import Step from '../../../components/Step/Step';

//List of resources available
const steps = [
  {
    resource: 'Characters',
  },
  {
    resource: 'Planets'
  }
];

const MainBody = (props) => {
  return (
    <Box p='30px' pb='8px' bgcolor='secondary.main'>
      {steps.map((step, i) => {
        const { resource } = step;
        const resourceToLC = resource.toLowerCase();

        return (
          <Step
            resource={resourceToLC}
            key={resourceToLC}
            stepHeading={`Step ${i + 1}: Select ${resource}`}
            stepSubHeading={`Choose your own ${resourceToLC} or generate random ones!`}
            {...props} 
          />
        );
      })}
    </Box>
  );
}

export default MainBody;
