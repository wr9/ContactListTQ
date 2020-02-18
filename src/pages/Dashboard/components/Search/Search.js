import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as searchActions from 'redux/modules/search';
import * as searchSelectors from 'redux/selectors/search';

import { Container, InputIconWrapper, Input, StyledSearchIcon } from './Search.styled';

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
        <Input
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
  query: searchSelectors.getSearchQuery(state),
});

const mapDispatchToProps = {
  setQuery: searchActions.setSearchQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
