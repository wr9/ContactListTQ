import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as dashboardActions from 'redux/modules/dashboard';
import * as selectors from 'redux/selectors';

import { Container, InputIconWrapper, StyledInput, StyledSearchIcon } from './Search.styled';

const Search = ({ query, setQuery }) => {
  const [isSearchFocused, setSearchFocus] = useState(false);

  const handleQueryChange = e => {
    const updatedQuery = e.target.value;
    setQuery(updatedQuery);
  };

  const handleSearchFocus = () => setSearchFocus(true);

  const handleSearchBlur = () => setSearchFocus(false);

  const isPlaceholderVisible = !isSearchFocused && query === '';

  return (
    <Container>
      <InputIconWrapper>
        <StyledInput
          value={query}
          onChange={handleQueryChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        {isPlaceholderVisible && <StyledSearchIcon />}
      </InputIconWrapper>
    </Container>
  );
};

const mapStateToProps = state => ({
  query: selectors.getSearchQuery(state),
});

const mapDispatchToProps = {
  setQuery: dashboardActions.setSearchQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
