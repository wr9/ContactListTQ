import styled from 'styled-components';
import media from 'style/mediaQueries';

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

export const Input = styled.input`
  width: 100%;
  height: inherit;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 0 2px 34px 0 #e3e3e3;
  padding-left: 24px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 700;
  color: #bbc4c3;

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
