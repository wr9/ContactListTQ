import { PICKER_OPTIONS } from 'consts';

// action types
const SET_PICKER = 'SET_PICKER';
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const RESET_SEARCH_QUERY = 'RESET_SEARCH_QUERY';

// initial state
const initialState = {
  selectedPickerOption: PICKER_OPTIONS.ALL_CONTACTS.value,
  searchQuery: '',
};

// action creators
export const setDashboardParams = search => {
  const params = new URLSearchParams(search);
  const filter = params.get('filter');
  const selectedOption = filter
    ? PICKER_OPTIONS.MY_FAVORITES.value
    : PICKER_OPTIONS.ALL_CONTACTS.value;

  return {
    type: SET_PICKER,
    selectedOption,
  };
};

export const setSearchQuery = query => {
  return {
    type: SET_SEARCH_QUERY,
    query,
  };
};

export const resetSearchQuery = () => {
  return {
    type: RESET_SEARCH_QUERY,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICKER:
      return {
        ...state,
        selectedPickerOption: action.selectedOption,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.query,
      };
    case RESET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: '',
      };
    default:
      return state;
  }
};

export default reducer;
