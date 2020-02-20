import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 42px;
  border-radius: 28.5px;
  background-color: ${props =>
    props.type === 'secondary' ? props.theme.colors.secondary : props.theme.colors.primary};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
	color: ${props => props.theme.colors.white};
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
`;

const Button = ({ className, children, type, onClick }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
