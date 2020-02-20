import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

export const Container = styled.button`
  height: 60px;
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 4px;
  opacity: 0.5;
  display: flex;
  align-items: center;
`;

export const StyledAddIcon = styled(AddIcon)`
  margin-left: 24px;
  fill: ${props => props.theme.colors.primary};
`;

export const LabelWrapper = styled.div`
  margin-left: 18px;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

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
