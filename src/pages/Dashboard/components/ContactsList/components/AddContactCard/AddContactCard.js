import React from 'react';
import { useHistory } from "react-router-dom";

import { Container, StyledAddIcon, LabelWrapper } from './AddContactCard.styled';

const AddContactCard = () => {
  const history = useHistory();

  const redirectToContactForm = () => {
    history.push("/create");
  }

  return (
    <Container onClick={redirectToContactForm}>
      <StyledAddIcon />
      <LabelWrapper>Add new</LabelWrapper>
    </Container>
  );
};

export default AddContactCard;
