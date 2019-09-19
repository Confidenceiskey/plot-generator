import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { 
  formatResource, 
  getSwapiData,
  customMessage,
  generateRandomSwapi 
} from './Helpers/SwapiFetch/SwapiFetch';
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
      randomSuggestion: '',
      plotList: {},
      isLoading: false,
      isErrorOnFetch: false,
      tooManyResources: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
  };

  // Adding resource to plot
  addToPlot = () => {
    const { searchValue, randomSuggestion } = this.state;
    console.log('search state: ', searchValue, 'random: ', randomSuggestion.name);
  }

/**
 ** SWAPI API ** SEARCH ** call 
 **/

// Step 3a: Dealing with Search bar Changes
  onSearchChange = (searchInput) => {
    this.setState({ searchValue: searchInput.value });
  };

  //Step 3a
  getSuggestions = async (searchTerm) => {
    const { resource } = this.state;
    const resourceType = formatResource(resource);
    const suggestionList = await getSwapiData(resourceType, searchTerm);

    this.setState({ searchSuggestions: suggestionList });
    return suggestionList;
  };

  //Step 3a
  searchResults = async (searchTerm) => {
    if (searchTerm !== '' || []) {
      const suggestions = await this.getSuggestions(searchTerm);
      return suggestions;
    } else {
      return;
    }
  };

  //Step 3a
  queryList = (searchTerm) => 
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.searchResults(searchTerm));
      }, 0);
    });

  // Step 3b: Obtains random resource from the SWAPI API
  getRandomQuery = async () => {
    this.setState({ isLoading: true, randomSuggestion: '' });
    const { resource } = this.state;
    const randomQuery = await generateRandomSwapi(resource);
    this.setState({ isLoading: false, randomSuggestion: randomQuery });
  };

  // Combined steps 1 & 2 for dealing with onChange events (dropdown & radio lists)
  onStepChanges = (e) => {
    const { value } = e.target;
    const name = e.target.name.slice(0, -1);
    this.setState({ [name]: value });

    // Initializes the process of generating a random resource (if selected).
    // Jumps to Step 3b
    if (value === 'random') {
      this.getRandomQuery();
    }
  };

  render() {
    const { searchValue, randomSuggestion } = this.state;
    return (
      <MainContainer maxWidth='sm'>
        <MainHeader />
        <MainBody 
          onChange={this.onStepChanges}
          suggestionResults={this.queryList}
          customDropdownMessage={() => customMessage(searchValue)} 
          onTextChange={this.onSearchChange}
          onRefreshClick={this.getRandomQuery}
          plotButtonClick={this.addToPlot}
          {...this.state}
        />
        { 
          <div>
            <h3>current searchValue: {searchValue}</h3>
            <h3>current randomValue: {randomSuggestion.name}</h3>
          </div>
        }
        <MainFooter onClick={this.handleClick} />
      </MainContainer>
    );
  }
}

export default Main;
