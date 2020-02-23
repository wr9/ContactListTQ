import styled from 'styled-components';
import media from 'style/mediaQueries';

import { Input } from 'common';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${media.medium} {
    flex-wrap: nowrap;
  }
`;

export const ValueInput = styled(Input)`
  margin-bottom: 10px;

  @media ${media.medium} {
    margin-bottom: 0;
    margin-right: 30px;
    max-width: 300px;
    flex-basis: 50%;
    flex-shrink: 0;
  }
`;

export const LabelIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media ${media.medium} {
    max-width: 300px;
    flex-basis: 50%;
  }
`;

export const LabelInput = styled(Input)`
  margin-right: 18px;
  flex: 1;

  @media ${media.medium} {
    margin-right: 30px;
  }
`;

export const DeletePhoneNumberButton = styled.button`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 50%;
  padding: 12px;
  display: flex;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    cursor: unset;
  }
`;

export const StyledCloseIcon = styled(AddIcon)`
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  fill: ${props => props.theme.colors.secondary};
`;
