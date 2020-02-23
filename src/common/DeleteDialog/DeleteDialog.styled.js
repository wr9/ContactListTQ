import styled from 'styled-components';
import media from 'style/mediaQueries';

import { Divider, Button } from 'common';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
`;

export const Dialog = styled.div`
  background-color: white;
  opacity: 1;

  @media ${media.medium} {
    width: 480px;
  }
`;

export const StyledTitle = styled.div`
  margin: 20px 0 20px 30px;
  color: #adb8b6;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
`;

export  const StyledDivider = styled(Divider)`
  border: thin solid #dcdcdc;
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;

  @media ${media.medium} {
    align-items: stretch;
  }
`;

export const StyledText = styled.div`
  color: #adb8b6;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  @media ${media.medium} {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledDeleteButton = styled(Button)`
  margin-bottom: 18px;
  width: 160px;
  flex: 0 0 42px;

  @media ${media.medium} {
    flex: 0 1 160px;
  }
`;

export const StyledCancelButton = styled(Button)`
  width: 160px;
  flex: 0 0 42px;

  @media ${media.medium} {
    flex: 0 1 160px;
  }
`;