import axios from 'axios';

// Format resource to match SWAPI API call 
export const formatResource = (resource) => {
  switch (resource) {
    case 'Characters':
      return 'people';
    case 'Planets':
      return 'planets';
    default:
      break;
  }
}

// Constants for SWAPI API
const PATH_BASE = 'https://swapi.co/api/';
const PARAM_SEARCH = 'search=';

// Create a global cancel token variable
let cancelToken;

/**
 *********** SEARCHING ***************
 **/

// Retrieving Swapi data based on SEARCH
export const getSwapiData = async (resourceType, searchTerm) => {
  // If a cancel token exists...
  if (cancelToken) {
    // Cancel the previous token
    cancelToken.cancel();
  }

  // Create a new Token request
  cancelToken = axios.CancelToken.source();

  try {
    //Make API call and retrieve the data
    const response = await axios(`${PATH_BASE}${resourceType}?${PARAM_SEARCH}`
     + `${searchTerm}`, { cancelToken: cancelToken.token });
    //Filter the reponse results to show an array of object values/labels
    const suggestions = response.data.results.map( item => {
      return { label: item.name, value: item.name };
    });
    //Limit results to 5
    const suggestionList = 
      suggestions.length > 5 ? suggestions.slice(0, 5) : suggestions;
    
    return suggestionList;

  } catch(err) { 
    if (axios.isCancel(err)) {
      //Search request was canceled. Do nothing!
      return '';
    } else {
      return 'Unfortunately your search request could not be processed!';
    }
  }
}

// Setting up a custom message for the suggestion dropdown
export const customMessage = (searchValue) => {
  if (searchValue !== '') {
    return 'No results found!';
  } else {
    //This prevents the dropdown from showing on initial click
    return null;
  }
};
