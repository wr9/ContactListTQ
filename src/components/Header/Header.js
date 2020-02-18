import React from "react";
import { Container, Logo, BottomAccent } from "./Header.styled";
import LogoSrc from "assets/Logo.svg";

const Header = () => (
  <Container>
    <Logo src={LogoSrc} alt="Typeqast logo" />
    <BottomAccent />
  </Container>
);

export default Header;
