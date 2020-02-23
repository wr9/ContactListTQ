import styled from 'styled-components';
import media from 'style/mediaQueries';

import { Input } from 'common';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputIconWrapper = styled.div`
  margin: 0 25px;
  height: 50px;
  width: 100%;
  position: relative;

  @media ${media.medium} {
    margin: 0;
    height: 60px;
    width: 540px;
  }
`;

export const StyledInput = styled(Input)`
  height: inherit;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 34px 0 #e3e3e3;
  padding-left: 24px;
  box-sizing: border-box;
  opacity: 1;
  font-weight: bold;

  @media ${media.medium} {
    font-size: 18px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  margin: auto 0 auto 24px;
  top: 0;
  bottom: 0;
  left: 0;
`;
