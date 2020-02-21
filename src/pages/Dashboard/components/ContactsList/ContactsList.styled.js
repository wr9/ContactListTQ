import styled from 'styled-components';
import media from 'style/mediaQueries';
import { AddContactCard, ContactCard } from './components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  grid-gap: 10px;

  @media ${media.medium} {
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    grid-gap: 30px;
    justify-content: center;
  }
`;

export const StyledAddContactCard = styled(AddContactCard)`
  height: 60px;

  @media ${media.medium} {
    height: 150px;
  }
`;

export const StyledContactCard = styled(ContactCard)`
  height: 60px;

  @media ${media.medium} {
    height: 150px;
  }
`;
