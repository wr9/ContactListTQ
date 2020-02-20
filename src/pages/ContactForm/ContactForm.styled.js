import styled from 'styled-components';
import media from 'style/mediaQueries';

import { Divider, Input, IconLabel, Button } from 'common';
import { PhoneNumbersForm } from './components';

export const Container = styled.div`
  padding: 24px 24px 32px 24px;
  @media ${media.medium} {
    padding: 60px 30px 78px 30px;
    display: flex;
    justify-content: center;
  }
`;

export const TextInputsContainer = styled.div`
  @media ${media.medium} {
    padding: 42px 0 0 28px;
    width: 630px;
  }
`;

export const PositionedDivider = styled(Divider)`
  margin-top: 16px;

  @media ${media.medium} {
    margin-top: 30px;
  }
`;

export const FlexWrapper = styled.div`
@media ${media.medium} {
    display: flex;
  }
`;

export const PositionedInput = styled(Input)`
  margin-top: 16px;

  @media ${media.medium} {
    max-width: 300px;
    flex-basis: 50%;
  }
`;

export const PositionedIconLabel = styled(IconLabel)`
  margin-top: 16px;
`;

export const PositionedPhoneNumbersForm = styled(PhoneNumbersForm)`
  margin-top: 16px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 68px;
  display: flex;
  justify-content: space-between;
`;

export const StyledCancelButton = styled(Button)`
  margin-left: 5px;
  flex: 0 0 160px;
`;

export const StyledSaveButton = styled(Button)`
  margin-left: 5px;
  flex: 0 0 160px;
`;
