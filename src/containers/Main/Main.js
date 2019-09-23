import React, { Component, Fragment } from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { 
  checkIfDuplicate, 
  filterPlotListBy, 
  resetState 
} from './Helpers/general/general';
import { 
  customMessage,
  formatResource, 
  generateRandomSwapi, 
  getSwapiData
} from './Helpers/SwapiFetch/SwapiFetch';
import { getRandomPlot } from './Helpers/plot/plot';
import MainBody from './MainBody/MainBody';
import MainHeader from './MainHeader/MainHeader';
import MainFooter from './MainFooter/MainFooter';
import Modal from '../../components/Modal/Modal'; 

const MainContainer = styled(Container)({
  padding: '0px',
  margin: '15px',

  '@media (max-width: 600px)': {
    position: 'absolute',
    margin: '0px',
    top: '0px'
  },
  '@media (max-height: 515px)': {
    position: 'absolute',
    top: '0px'
  }
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      resource: '',
      option: '',
      searchValue: '',
      inputValue: '',
      searchSuggestions: '',
      randomSuggestion: '',
      plotList: [],
      plotStory: { title: [], description: [], resources: [] },
      isLoading: false,
      isError: { duplicate: false, tooManyResources: false, onFetch: false },
      isModalOpen: false
    }
  }

  //Creating the story plot
  generatePlot = (e) => {
    e.preventDefault();
    const { plotList } = this.state;

    if (plotList.length > 0) {
      const title = getRandomPlot(plotList);
      this.setState({ isModalOpen: true, plotStory: title });
    }
  };

  //Closing the story plot/modal window
  closeModal = () => {
    const reset = resetState();
    this.setState(reset);
  };

  // Adding a resource to the plot
  addToPlot = () => {
    const { searchValue, randomSuggestion, option, resource, plotList } = this.state;    
    const value = option === 'random' ? randomSuggestion.name : searchValue;

    const isDuplicate = checkIfDuplicate(plotList, value);
    const resourceCountInList = filterPlotListBy(plotList, resource).length + 1;

    if (!isDuplicate && resourceCountInList <= 3) {
      this.setState(prevState => ({ 
        plotList: 
          [...prevState.plotList, { name: value, resource: resource }]
      }));
    } else {
      const errType = isDuplicate ? 'duplicate' : 'tooManyResources';
      this.updateErrorState(errType);
      setTimeout(this.updateErrorState, 3000, errType);
    } 
  };

  // Updating Error state
  updateErrorState = (errorType) => {
    this.setState(prevState => ({
      isError: {...prevState.isError, [errorType]: !prevState.isError[errorType]}
    }));
  };

  // Deleting resource from plot
  deletePlotItem = (i) => {
    this.setState((state) => {
      const newList = state.plotList.filter((entry, j) => i !== j);
      return { plotList: newList };
    });
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

  /**
   ** SWAPI API ** SEARCH ** call 
   **/

  // Step 3a: Dealing with Search bar Changes
  onSearchChange = (searchInput) => {
    this.setState({ searchValue: searchInput ? searchInput.value : '' });
  };

  //Step 3a
  onInputChange = (inputValue) => {
    this.setState({ inputValue });
    return inputValue;
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

  /**
   ** SWAPI API ** RANDOM ** call 
   **/

  // Step 3b: Obtains random resource from the SWAPI API
  getRandomQuery = async () => {
    this.setState({ isLoading: true, randomSuggestion: '' });
    const { resource } = this.state;
    const randomQuery = await generateRandomSwapi(resource);
    this.setState({ isLoading: false, randomSuggestion: randomQuery });
  };

  render() {
    const { inputValue, isModalOpen } = this.state;
    return (
      <Fragment>
        <MainContainer maxWidth='sm'>
          <MainHeader />
          <MainBody 
            onChange={this.onStepChanges}
            suggestionResults={this.queryList}
            customDropdownMessage={() => customMessage(inputValue)} 
            onSelectChange={this.onSearchChange}
            onTextChange={this.onInputChange}
            onRefreshClick={this.getRandomQuery}
            plotButtonClick={this.addToPlot}
            onDelete={(i) => this.deletePlotItem(i)}
            {...this.state}
          />
          <MainFooter onClick={this.generatePlot} />
        </MainContainer>
        <Modal 
          openModal={isModalOpen} 
          closeModal={this.closeModal} 
          {...this.state} 
        />
      </Fragment>
    );
  }
}

export default Main;
