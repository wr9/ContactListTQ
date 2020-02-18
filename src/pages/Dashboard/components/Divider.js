import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
  margin: 0 5%;
  border: 1px solid ${props => props.theme.colors.primary};
`;

const Divider = () => <StyledDivider />;

export default Divider;
