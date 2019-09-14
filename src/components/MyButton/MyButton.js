import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { mainStyles } from '../../styles/GlobalStyles/GlobalStyles';

const { primaryDark, secondaryColor } = mainStyles;

const ThisButton = styled(Button)({
  borderRadius: '0px',
  background: secondaryColor,
  color: primaryDark,
  fontSize: '24px',
  textTransform: 'capitalize',
  fontFamily: 'distantGalaxy',

  '&:hover': {
    background: '#fdd820'
  }
});

const MyButton = ({ fullWidth, text, onClick }) => {
  return (
    <ThisButton 
      fullWidth={fullWidth} 
      onClick={onClick}
    >
      {text}
    </ThisButton>
  );
}

export default MyButton;
