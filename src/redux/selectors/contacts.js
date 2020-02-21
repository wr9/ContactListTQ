import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.data;

export const getContactsArray = createSelector(getContacts, contacts =>
  contacts ? Object.values(contacts).filter(contact => contact) : [],
);
