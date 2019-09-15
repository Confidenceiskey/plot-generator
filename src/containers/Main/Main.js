import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import MainBody from './MainBody/MainBody';
import MainHeader from './MainHeader/MainHeader';
import MainFooter from './MainFooter/MainFooter';
import { onStepChange } from './Helpers/OnChange/steps';

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
      resource: '',
      option: '',
      plotList: {},
      isLoading: false,
      isErrorOnFetch: false,
      tooManyResources: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
  }

// // Step 1 function (stores value of step 1 into state)
//   setResourceType = (e) => {
//     this.setState({
//       resource: e.target.value
//     });
//   }

// // Step 2 function (stores value of step 2 into state)
//   setSearchingOption = (e) => {
//     this.setState({
//       option: e.target.value
//     });
//   }

// Step 1 & Step 2 functions for dealing with onChange events
  // onStepChange = (e) => {
  //   if (e.target.name === 'resources') {
  //     this.setResourceType(e);
  //   } else if (e.target.name === 'option1' || 'option2') {
  //     this.setSearchingOption(e);
  //   } 
  // }

    onStepChanges = (e) => {
      const { value } = e.target;
      const name = e.target.name.slice(0, -1);
      
      this.setState(onStepChange(name, value));
    }

  render() {
    return (
      <MainContainer maxWidth='sm'>
        <MainHeader />
        <MainBody {...this.state} onChange={this.onStepChanges}/>
        <MainFooter onClick={this.handleClick} />
      </MainContainer>
    );
  }
}

export default Main;
