const localStorageKey = 'contacts';

export const loadContacts = () =>
  new Promise(resolve => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    resolve(contacts);
  });

export const loadContact = id =>
  new Promise(resolve => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    const contact = contacts[id] || {};
    resolve(contact);
  });

export const createContact = contact =>
  new Promise(resolve => {
    var dummyUniqueId = Date.now();
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[dummyUniqueId] = { ...contact, id: dummyUniqueId, isFavorite: false };
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(dummyUniqueId);
  });

export const updateContact = (id, updatedContact) =>
  new Promise(resolve => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[id] = { ...updatedContact, id };
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(id);
  });

export const deleteContact = id =>
  new Promise(resolve => {
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[id] = null;
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(id);
  });

const validateEmail = email => {
  const emailValidator = /\S+@\S+\.\S+/;
  return emailValidator.test(email);
};

const validatePhoneNumber = phoneNumber => {
  const phoneNumberValueValidator = /^\+{0,1}[\d]{6,}$/;
  return phoneNumberValueValidator.test(phoneNumber.value);
};

const getPhoneNumbersValidationErrors = phoneNumbers =>
  phoneNumbers.map(phoneNumber => ({
    label: phoneNumber.label === '',
    value: !validatePhoneNumber(phoneNumber),
  }));

export const getValidationErrors = contact => {
  const { avatar, fullName, email, phoneNumbers } = contact;
  return {
    avatar: avatar === '',
    fullName: fullName === '',
    email: !validateEmail(email),
    phoneNumbers: getPhoneNumbersValidationErrors(phoneNumbers),
  };
};

export const filterContactsByName = (contacts, query) =>
  contacts.filter(contact => contact.fullName.toLowerCase().includes(query.toLowerCase()));
