import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  margin-left: 15px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.fontSize};
  font-weight: bold;
`;

const IconLabel = ({ icon, label, className, fontSize = '14px' }) => {
  return (
    <Container className={className}>
      {icon}
      <Label fontSize={fontSize}>{label}</Label>
    </Container>
  );
};

export default IconLabel;
