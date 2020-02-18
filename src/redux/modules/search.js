// action types
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
const RESET_SEARCH_QUERY = "RESET_SEARCH_QUERY";

// initial state
const initialState = {
  query: ""
};

// action creators
export const setSearchQuery = query => {
  return {
    type: SET_SEARCH_QUERY,
    query
  };
};
export const resetSearchQuery = () => {
  return {
    type: RESET_SEARCH_QUERY
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      };
    case RESET_SEARCH_QUERY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
