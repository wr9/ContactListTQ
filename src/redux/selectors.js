import { createSelector } from 'reselect';
import { PICKER_OPTIONS } from 'consts';
import { filterContactsByName } from 'utils';

export const getSelectedPickerOption = state => state.dashboard.selectedPickerOption;
export const getSearchQuery = state => state.dashboard.searchQuery;
export const getContacts = state => state.contacts.data;
export const getIsDeleteInProgress = state => state.contacts.isDeleteInProgress;
export const getContactToBeDeletedId = state => state.contacts.contactToBeDeletedId;

export const getContactsArray = createSelector([getContacts], contacts =>
  contacts ? Object.values(contacts).filter(contact => contact) : [],
);

export const getFavoriteFilteredContacts = createSelector(
  [getContactsArray, getSelectedPickerOption],
  (contacts, selectedPickerOption) =>
    contacts.filter(
      contact => selectedPickerOption === PICKER_OPTIONS.ALL_CONTACTS.value || contact.isFavorite,
    ),
);

export const getDashboardContacts = createSelector(
  [getFavoriteFilteredContacts, getSearchQuery],
  filterContactsByName,
);
