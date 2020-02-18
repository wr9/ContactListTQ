import { PICKER_OPTIONS } from "consts";

// action types
const SET_PICKER = "SET_PICKER";

// initial state
const initialState = {
  selectedOption: PICKER_OPTIONS.ALL_CONTACTS.value
};

// action creators
export const setPicker = selectedOption => {
  return {
    type: SET_PICKER,
    selectedOption
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICKER:
      return {
        ...state,
        selectedOption: action.selectedOption
      };
    default:
      return state;
  }
};

export default reducer;
