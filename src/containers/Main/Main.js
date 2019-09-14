import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import MainBody from './MainBody/MainBody';
import MainHeader from './MainHeader/MainHeader';
import MainFooter from './MainFooter/MainFooter';

const MainContainer = styled(Container)({
  padding: '0px',
  margin: '15px',
  borderRadius: '30px',
  overflow: 'hidden',
  height: 'fit-content',

  '@media (max-width: 600px)': {
    margin: '0px',
    borderRadius: '0px'
  }
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tooManyResources: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
  }

  render() {
    return (
      <MainContainer maxWidth='sm'>
        <MainHeader />
        <MainBody {...this.state} />
        <MainFooter onClick={this.handleClick} />
      </MainContainer>
    );
  }
}

export default Main;
