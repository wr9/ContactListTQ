import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid rgba(${props => (props.error ? '256, 0, 0' : '187,196,195')}, 0.4);
  border-radius: 4px;
  height: 50px;
  padding-left: 24px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  color: ${props => props.theme.colors.text};
  caret-color: ${props => props.theme.colors.primary};

  ::placeholder {
    color: ${props => props.theme.colors.text};
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
