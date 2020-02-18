import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 4px;
  opacity: 0.5;
`;
