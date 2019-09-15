import React from 'react';
import PlotButton from '../../../components/Buttons/PlotButton';

const MainFooter = ({ onClick }) => {
  return (
    <PlotButton 
      fullWidth={true} 
      text='Generate Plot' 
      onClick={onClick} 
    />
  );
}

export default MainFooter;
