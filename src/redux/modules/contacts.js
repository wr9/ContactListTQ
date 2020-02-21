import {
  loadContacts as loadContactsApi,
  deleteContact as deleteContactApi,
  updateContact as updateContactApi,
} from 'utils';

// action types
const LOAD_CONTACTS = 'LOAD_CONTACTS';
const DELETE_CONTACT = 'DELETE_CONTACT';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

// initial state
const initialState = {
  data: null,
};

// action creators
export const loadContacts = () => dispatch => {
  loadContactsApi().then(contacts => {
    dispatch({
      type: LOAD_CONTACTS,
      contacts,
    });
  });
};

export const deleteContact = id => dispatch => {
  return deleteContactApi(id).then(id => {
    dispatch({
      type: DELETE_CONTACT,
      id,
    });
  });
};

export const updateContact = (id, contact) => dispatch => {
  return updateContactApi(id, contact).then(id => {
    dispatch({
      type: UPDATE_CONTACT,
      id,
      contact,
    });
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        data: action.contacts,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: null,
        },
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: action.contact,
        },
      };

    default:
      return state;
  }
};

export default reducer;
