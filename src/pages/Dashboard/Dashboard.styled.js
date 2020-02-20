import styled from "styled-components";
import media from "style/mediaQueries";
import { Divider } from 'common';

export const PickerWrapper = styled.div`
  margin-top: 16px;

  @media ${media.medium} {
    margin-top: 48px;
  }
`;

export const PositionedDivider = styled(Divider)`
  margin: 16px 5% 0 5%;

  @media ${media.medium} {
    margin-top: 48px;
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 24px;

  @media ${media.medium} {
    margin-top: 60px;
  }
`

export const ContactsListWrapper = styled.div`
  margin: 24px 8px 24px 8px;

  @media ${media.medium} {
    margin: 60px 120px 60px 120px;
  }
`