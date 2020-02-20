import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  margin-left: 15px;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

const IconLabel = ({ icon, label, className }) => {
  return (
    <Container className={className}>
      {icon}
      <Label>{label}</Label>
    </Container>
  );
};

export default IconLabel;
