import React from 'react';
import styled from 'styled-components';
import media from 'style/mediaQueries';
import { useHistory } from 'react-router-dom';

import { ReactComponent as BackArrowIcon } from 'assets/icons/backArrow.svg';

export const Container = styled.div`
  display: none;

  @media ${media.medium} {
    display: unset;
  }
`;

export const BackButton = styled.button`
  margin-left: 29px;

  @media ${media.medium} {
    margin-left: 0;
    margin-bottom: 6px;
  }
`;

const DesktopToolbar = () => {
  const history = useHistory();

  const handleBackArrowClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <BackButton onClick={handleBackArrowClick}>
        <BackArrowIcon />
      </BackButton>
    </Container>
  );
};

export default DesktopToolbar;
