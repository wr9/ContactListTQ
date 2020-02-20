import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  border: 1px solid ${props => props.theme.colors.primary};
  opacity: 0.4;
`;

const Divider = ({ className }) => <StyledDivider className={className} />;

export default Divider;
