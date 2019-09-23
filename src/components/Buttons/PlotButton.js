import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { mainStyles } from '../../styles/GlobalStyles/GlobalStyles';

const { primaryDark, secondaryColor } = mainStyles;

const ThisButton = styled(Button)({
  background: secondaryColor,
  color: primaryDark,
  fontSize: '24px',
  textTransform: 'capitalize',
  fontFamily: 'distantGalaxy',
  borderRadius: '0 0 30px 30px',

  '&:hover': {
    background: '#fdd820'
  },

  '@media (max-width: 600px)': {
    fontSize: '21px',
    borderRadius: '0px'
  }
});

const PlotButton = ({ fullWidth, text, onClick }) => {
  return (
    <ThisButton 
      fullWidth={fullWidth} 
      onClick={onClick}
    >
      {text}
    </ThisButton>
  );
}

export default PlotButton;
