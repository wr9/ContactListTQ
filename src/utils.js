const localStorageKey = 'contacts';

export const saveContact = contact =>
  new Promise((resolve, reject) => {
    var dummyUniqueId = Date.now();
    const contacts = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    contacts[dummyUniqueId] = { ...contact, id: dummyUniqueId };
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    resolve(dummyUniqueId);
  });
