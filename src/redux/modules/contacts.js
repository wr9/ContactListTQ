import {
  loadContacts as loadContactsApi,
  deleteContact as deleteContactApi,
  updateContact as updateContactApi,
} from 'utils';

// action types
const LOAD_CONTACTS = 'LOAD_CONTACTS';
const DELETE_CONTACT = 'DELETE_CONTACT';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const START_DELETE_PROGRESS = 'START_DELETE_PROGRESS';
const STOP_DELETE_PROGRESS = 'STOP_DELETE_PROGRESS';

// initial state
const initialState = {
  data: null,
  isDeleteInProgress: false,
  contactToBeDeletedId: '',
};

// action creators
export const loadContacts = () => async dispatch => {
  const contacts = await loadContactsApi();
  dispatch({
    type: LOAD_CONTACTS,
    contacts,
  });
};

export const deleteContact = id => async dispatch => {
  await deleteContactApi(id);
  dispatch({
    type: DELETE_CONTACT,
    id,
  });
};

export const updateContact = (id, contact) => async dispatch => {
  await updateContactApi(id, contact);
  dispatch({
    type: UPDATE_CONTACT,
    id,
    contact,
  });
};

export const startDeleteProgress = id => ({
  type: START_DELETE_PROGRESS,
  id,
});

export const stopDeleteProgress = () => ({
  type: STOP_DELETE_PROGRESS,
});

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
        isDeleteInProgress: false,
        contactToBeDeletedId: '',
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: action.contact,
        },
      };
    case START_DELETE_PROGRESS:
      return {
        ...state,
        isDeleteInProgress: true,
        contactToBeDeletedId: action.id,
      };
    case STOP_DELETE_PROGRESS:
      return {
        ...state,
        isDeleteInProgress: false,
        contactToBeDeletedId: '',
      };
    default:
      return state;
  }
};

export default reducer;
