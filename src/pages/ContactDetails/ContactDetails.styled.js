import styled from 'styled-components';
import media from 'style/mediaQueries';

import { Divider, Avatar, IconLabel } from 'common';

export const Container = styled.div`
  padding: 20px;
  @media ${media.medium} {
    padding: 60px 30px 78px 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const AvatarNameContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${media.medium} {
    margin-right: 30spx;
  }
`;

export const StyledAvatar = styled(Avatar)`
  height: 56px;
  width: 56px;

  @media ${media.medium} {
    height: 186px;
    width: 186px;
  }
`;

export const StyledName = styled.div`
  margin-left: 24px;
  color: #adb8b6;
  font-size: 21px;
  font-weight: bold;
  line-height: 28px;

  @media ${media.medium} {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  @media ${media.medium} {
    margin-left: 28px;
    width: 630px;
  }
`;

export const PositionedDivider = styled(Divider)`
  margin: 22px 4px;

  @media ${media.medium} {
  }
`;

export const ContactContainer = styled.div`
  margin-top: 12px;
  margin-left: 24px;

  @media ${media.medium} {
    margin-top: 63px;
    margin-left: 63px;
  }
`;

export const EmailContainer = styled.div`
  @media ${media.medium} {
    display: flex;
  }
`;

export const EmailLabel = styled(IconLabel)`
  @media ${media.medium} {
    flex-basis: 30%;
  }
`;

export const StyledEmail = styled.div`
  margin-left: 30px;
  color: #adb8b6;
  font-size: 16px;

  @media ${media.medium} {
    margin-left: 0;
  }
`;

export const PhoneNumbersContainer = styled.div`
  margin-top: 50px;
  @media ${media.medium} {
    margin-top: 71px;
    display: flex;
    align-items: flex-start;
  }
`;

export const PhoneNumbersLabel = styled(IconLabel)`
  margin-bottom: 24px;

  @media ${media.medium} {
    margin-bottom: 0;
    flex-basis: 30%;
  }
`;

export const PhoneNumberValuesContainer = styled.div`
  margin-left: 30px;
  @media ${media.medium} {
    margin-left: 0;
    min-width: 400px;
  }
`;

export const PhoneNumberContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
`;

export const PhoneNumberLabel = styled.div`
  flex-basis: 40%;
  color: #adb8b6;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const PhoneNumberValue = styled.a`
  color: #adb8b6;
  font-size: 16px;
  line-height: 20px;
`;