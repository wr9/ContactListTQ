import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  opacity: 0.4;
  height: 50px;
  padding-left: 24px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  caret-color: ${props => props.theme.colors.primary};
`;

const Input = props => <StyledInput {...props} />;

export default Input;
