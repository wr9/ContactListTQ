import React from 'react';
import { createContact } from 'utils';
import { ContactForm } from './components';

const CreateContact = () => {
  const handleSubmit = contact => createContact(contact);

  const emptyContact = {
    avatar: '',
    fullName: '',
    email: '',
    phoneNumbers: [{ label: '', value: '' }],
  };

  return <ContactForm onSubmit={handleSubmit} contact={emptyContact} />;
};

export default CreateContact;
