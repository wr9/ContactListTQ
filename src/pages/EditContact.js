import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { loadContact, updateContact } from 'utils';
import { ContactForm } from './components';

const EditContact = () => {
  const { id } = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact(id).then(contact => {
      setContact(contact);
    });
  }, [id]);

  const handleSubmit = contact => updateContact(id, contact);

  return contact && <ContactForm onSubmit={handleSubmit} contact={contact} />;
};

export default EditContact;
