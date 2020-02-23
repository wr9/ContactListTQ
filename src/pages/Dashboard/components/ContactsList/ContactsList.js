import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as contactsActions from 'redux/modules/contacts';
import * as selectors from 'redux/selectors';
import { Container, StyledAddContactCard, StyledContactCard } from './ContactsList.styled';

const ContactsList = ({ loadContacts, startDeleteProgress, updateContact, contacts }) => {
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleDeleteClick = id => startDeleteProgress(id);

  return (
    <Container>
      <StyledAddContactCard />
      {contacts.map((contact, index) => (
        <StyledContactCard
          contact={contact}
          onDeleteClick={handleDeleteClick}
          updateContact={updateContact}
          key={index}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: selectors.getDashboardContacts(state),
});

const mapDispatchToProps = {
  loadContacts: contactsActions.loadContacts,
  startDeleteProgress: contactsActions.startDeleteProgress,
  updateContact: contactsActions.updateContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
