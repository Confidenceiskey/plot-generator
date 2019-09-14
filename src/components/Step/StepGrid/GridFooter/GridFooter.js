import React from 'react';
//import { AddCircle } from '@material-ui/icons'
import { Box, CardMedia, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import add from '../../../../assets/add-icon.svg';

const ErrorMessage = styled(({ background, border, ...other }) => 
  <Typography {...other} />
)({
  fontWeight: '500',
  background: props => props.background,
  padding: '5px 10px',
  borderRadius: '5px',
  border: props => props.border
});

const AddIcon = styled(CardMedia)({
  background: '#9e9e9e',
  height: '36px',
  width: '36px',
  borderRadius: '50%',
  cursor: 'pointer',
  mask: `url(${add})`,

  '&:hover': {
    background: '#1c1b1b'
  }
});

// Height of the footer row & footer width for the '+' sign on right side
const size = '60px';

const GridFooter = ({ resource, tooManyResources, background, border }) => {
  const errorText = `Limited to 3 ${resource} only!`;
  const bgColour = tooManyResources ? '#ffcdd2' : 'unset';
  const borderColour = tooManyResources ? '1px solid #ef9a9a' : 'unset';

  return (
    <Box display='flex'>
      {/* Left Side of Footer: Error text. Displayed on condition */}
      <Box 
        display='flex' 
        flexGrow={1} 
        height={size} 
        alignItems='center'
      >
        <ErrorMessage 
          variant='body2' 
          color='error' 
          background={bgColour} 
          border={borderColour}
        > 
          {tooManyResources ? errorText : null}
        </ErrorMessage>
      </Box>

      {/* Right Side of Footer: '+' Sign */}
      <Box 
        display='flex' 
        width={size} 
        height={size} 
        alignItems='center'
        justifyContent='center'
      >
        <AddIcon
          
          title="Add item"
        />
      </Box>
    </Box>
  );
}

export default GridFooter;
