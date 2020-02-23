import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import * as contactsActions from 'redux/modules/contacts';
import { loadContact, updateContact } from 'utils';
import { ContactForm } from './components';

const EditContact = ({startDeleteProgress}) => {
  const { id } = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact(id).then(contact => {
      setContact(contact);
    });
  }, [id]);

  const handleSubmit = contact => updateContact(id, contact);

  const handleDeleteClick = () => startDeleteProgress(id);

  const toolbarProps = {
    type: 'edit',
    contact: contact,
    onDeleteClick: handleDeleteClick,
  };

  return (
    contact && <ContactForm onSubmit={handleSubmit} contact={contact} toolbarProps={toolbarProps} />
  );
};

const mapDispatchToProps = {
  startDeleteProgress: contactsActions.startDeleteProgress,
};

export default connect(null, mapDispatchToProps)(EditContact);
