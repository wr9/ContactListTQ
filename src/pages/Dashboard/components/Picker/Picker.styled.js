import styled from 'styled-components';
import media from 'style/mediaQueries';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.button`
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: ${props => (props.isSelected ? props.theme.colors.primary : props.theme.colors.secondary)};

  @media ${media.medium} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Divider = styled.div`
  height: 14px;
  margin: auto 30px;
  border: 1px solid ${props => props.theme.colors.secondary};
`;
