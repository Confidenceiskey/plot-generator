import React, { Fragment } from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const QueryResultBox = ({ isLoading, randomSuggestion }) => {
  return (
    <Fragment>
      { !isLoading ? 
        (/* Displays random query result */
          <Box mx='12px' borderBottom={1}>
            {randomSuggestion.name}
          </Box>
        ) :
        (/* Displays loading gif */
          <CircularProgress />
        ) 
      }
    </Fragment>
  );
}

export default QueryResultBox;
