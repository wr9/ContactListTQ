import React from 'react';
import styled from 'styled-components';
import media from 'style/mediaQueries';
import { useHistory } from 'react-router-dom';

import { ReactComponent as BackArrowIcon } from 'assets/icons/backArrow.svg';
import { Divider } from 'common';

export const Container = styled.div`
  @media ${media.medium} {
    display: none;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  margin-left: 29px;
`;

export const StyledDivider = styled(Divider)`
  margin-top: 19px;
  border-color: ${props => props.theme.colors.secondary};
`;

const MobileToolbar = () => {
  const history = useHistory();

  const handleBackArrowClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <BackButton onClick={handleBackArrowClick}>
        <BackArrowIcon />
      </BackButton>
      <StyledDivider />
    </Container>
  );
};

export default MobileToolbar;
