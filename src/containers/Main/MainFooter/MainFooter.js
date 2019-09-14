import React from 'react';
import MyButton from '../../../components/MyButton/MyButton';

const MainFooter = ({ onClick }) => {
  return (
    <MyButton 
      fullWidth={true} 
      text='Generate Plot' 
      onClick={onClick} 
    />
  );
}

export default MainFooter;
