// Checks whether there is a duplicate entry in the plot list
export const checkIfDuplicate = (arrObjList, entry) => {
  if (arrObjList.length > 0) {
    const key = 'name';
    const duplicateValue = filterList(arrObjList, key, entry);
    if (duplicateValue.length === 1) {
      return true;
    }
  }
  return false;
}

// Filters the plot list by resource type (ex: planets)
export const filterPlotListBy = (arrObjList, resourceType) => {
  const key = 'resource';
  return filterList(arrObjList, key, resourceType);
}

// Returns an error message if it exists
export const getErrorMsg = (errState, resource) => {
  if (errState.duplicate) {
    return eMessages.duplicate;
  } else if (errState.tooManyResources) {
    return `${eMessages.tooManyResources1} ${resource.toLowerCase()} ${eMessages.tooManyResources2}`;
  }
  return false;
};

/**
 ** GENERAL HELPER FUNCTIONS USED WITHIN THIS FILE  
 **/

// Filters an object array list for a specific value
const filterList = (list, key, value) => {
  return list.filter((row) => {
    return row[key] === value;
  });
};

// Contains error messages
const eMessages = {
  duplicate: 'No duplicate entries allowed!',
  tooManyResources1: 'Maximum of 3',
  tooManyResources2: 'allowed in plot!'
}

// Resets state to initial state 
export const resetState = () => {
  return ({
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
    });
};