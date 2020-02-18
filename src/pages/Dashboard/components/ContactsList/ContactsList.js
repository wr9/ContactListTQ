import React from 'react';
import { AddContactCard } from './components';

import { Container } from './ContactsList.styled';

const ContactsList = () => {
  return (
    <Container>
      <AddContactCard />
    </Container>
  );
};

export default ContactsList;
