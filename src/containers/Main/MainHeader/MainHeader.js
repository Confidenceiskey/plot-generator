import React from 'react';
import { styled } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { mainStyles } from '../../../styles/GlobalStyles/GlobalStyles';

const { primaryDark } = mainStyles;

const HeaderContainer = styled(({ bgColor, ...other }) => 
  <Box {...other} />
)({
  backgroundColor: props => props.bgColor,
  padding: '10px 0'
});

const Heading = styled(Typography)({
  fontFamily: 'starJediHol',
  fontSize: '80px',

  '@media (min-width: 451px) and (max-width: 600px)': {
    fontSize: '64px'
  },
  '@media (max-width: 450px)': {
    fontSize: '52px'
  }
});

const SubHeading = styled(Typography)({
  fontFamily: 'starJedise',
  fontSize: '28px',

  '@media (min-width: 451px) and (max-width: 600px)': {
    fontSize: '25px'
  },
  '@media (max-width: 450px)': {
    fontSize: '23px'
  }
});

const MainHeader = () => {
  return (
    <HeaderContainer 
      display='flex' 
      flexDirection='column'
      alignItems='center'
      justifyContent='center' 
      bgColor={primaryDark}
    >
      <Heading variant='h1' color='textSecondary' >
        STAR WARS
      </Heading> 
      <SubHeading color='secondary'>
        Plot Generator
      </SubHeading>
    </HeaderContainer>
  );
}

export default MainHeader;
