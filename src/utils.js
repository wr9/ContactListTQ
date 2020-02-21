const localStorageKey = 'contacts';

export const loadContacts = () =>
  new Promise((resolve, reject) => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    resolve(contacts);
  });

export const loadContact = id =>
  new Promise((resolve, reject) => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    const contact = contacts[id] || {};
    resolve(contact);
  });

export const createContact = contact =>
  new Promise((resolve, reject) => {
    var dummyUniqueId = Date.now();
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[dummyUniqueId] = { ...contact, id: dummyUniqueId };
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(dummyUniqueId);
  });

export const updateContact = (id, updatedContact) =>
  new Promise((resolve, reject) => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[id] = { ...updatedContact, id };
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(id);
  });

export const deleteContact = id =>
  new Promise((resolve, reject) => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[id] = null;
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(id);
  });
