import React from 'react';
import styled from 'styled-components';
import media from 'style/mediaQueries';
import { useHistory } from 'react-router-dom';

import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

const Container = styled.button`
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 4px;
  opacity: 0.5;
  display: flex;
  align-items: center;

  @media ${media.medium} {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  margin-left: 24px;
  fill: ${props => props.theme.colors.primary};

  @media ${media.medium} {
    margin-left: 0;
  }
`;

const LabelWrapper = styled.div`
  margin-left: 18px;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  font-weight: normal;
  line-height: 17px;

  @media ${media.medium} {
    margin-left: 0;
  }
`;

const AddContactCard = ({ className }) => {
  const history = useHistory();

  const redirectToContactForm = () => {
    history.push('/create');
  };

  return (
    <Container className={className} onClick={redirectToContactForm}>
      <StyledAddIcon />
      <LabelWrapper>Add new</LabelWrapper>
    </Container>
  );
};

export default AddContactCard;
