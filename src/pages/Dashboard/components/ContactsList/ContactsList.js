import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as contactsActions from 'redux/modules/contacts';
import * as contactsSelectors from 'redux/selectors/contacts';
import { Container, StyledAddContactCard, StyledContactCard } from './ContactsList.styled';

const ContactsList = ({ loadContacts, deleteContact, updateContact, contacts }) => {
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return (
    <Container>
      <StyledAddContactCard />
      {contacts.map((
        contact,
        index,
      ) => (
        <StyledContactCard
          contact={contact}
          deleteContact={deleteContact}
          updateContact={updateContact}
          key={index}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContactsArray(state),
});

const mapDispatchToProps = {
  loadContacts: contactsActions.loadContacts,
  deleteContact: contactsActions.deleteContact,
  updateContact: contactsActions.updateContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
