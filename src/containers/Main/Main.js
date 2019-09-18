import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { 
  formatResource, 
  getSwapiData,
  customMessage } from './Helpers/SwapiFetch/SwapiFetch';
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
      resource: '',
      option: '',
      searchValue: '',
      searchSuggestions: '',
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

/**
 ** SWAPI API ** SEARCH ** call 
 **/

// Step 3a: Dealing with Search bar Changes
  onSearchChange = (searchTerm) => {
    this.setState({ searchValue: searchTerm });
    return searchTerm;
  };

  getSuggestions = async (searchTerm) => {
    const { resource } = this.state;
    const resourceType = formatResource(resource);
    const suggestionList = await getSwapiData(resourceType, searchTerm);

    this.setState({ searchSuggestions: suggestionList });
    return suggestionList;
  };

  searchResults = async (searchTerm) => {
    if (searchTerm !== '' || []) {
      const suggestions = await this.getSuggestions(searchTerm);
      return suggestions;
    } else {
      return;
    }
  };

  queryList = (searchTerm) => 
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.searchResults(searchTerm));
      }, 0);
    });

// Random numbers:
    // People : 1 to 87
    // Planets: 1 to 61
  // random URL string = https://swapi.co/api/resource/randomNumber


// Combined steps 1 & 2 for dealing with onChange events (dropdown & radio lists)
  onStepChanges = (e) => {
    const { value } = e.target;
    const name = e.target.name.slice(0, -1);
    this.setState({ [name]: value });

    if (this.state.option === 'random') {
      console.log('resource: ', this.state.resource, ' option: ', this.state.option)
      //this.getSwapiData(this.state.resource, this.state.option);
    }
  }

  render() {
    const { searchValue } = this.state;
    return (
      <MainContainer maxWidth='sm'>
        <MainHeader />
        <MainBody 
          onChange={this.onStepChanges}
          suggestionResults={this.queryList}
          customDropdownMessage={() => customMessage(searchValue)} 
          onTextChange={this.onSearchChange}
          onClick={this.onAddToPlot} 
          {...this.state}
        />
        <MainFooter onClick={this.handleClick} />
      </MainContainer>
    );
  }
}

export default Main;
