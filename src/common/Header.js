import React from "react";
import styled from 'styled-components';
import media from 'style/mediaQueries';

import LogoSrc from "assets/Logo.svg";

const Container = styled.div`
  height: 50px;
  background-image: linear-gradient(
    182.65deg,
    ${props => props.theme.colors.primaryDark},
    ${props => props.theme.colors.primaryLight}
  );
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  @media ${media.medium} {
    height: 60px;
  }
`;

const Logo = styled.img`
  margin-top: auto;
`;

const BottomAccent = styled.div`
  height: 7px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.3;
  margin-top: auto;
`;


const Header = () => (
  <Container>
    <Logo src={LogoSrc} alt="Typeqast logo" />
    <BottomAccent />
  </Container>
);

export default Header;
