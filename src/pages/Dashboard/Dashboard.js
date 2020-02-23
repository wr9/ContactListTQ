import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import media from 'style/mediaQueries';

import * as dashboardActions from 'redux/modules/dashboard';
import { Divider } from 'common';
import { Picker, Search, ContactsList } from './components';

const PickerWrapper = styled.div`
  margin-top: 16px;

  @media ${media.medium} {
    margin-top: 48px;
  }
`;

const PositionedDivider = styled(Divider)`
  margin: 16px 5% 0 5%;

  @media ${media.medium} {
    margin-top: 48px;
  }
`;

const SearchWrapper = styled.div`
  margin-top: 24px;

  @media ${media.medium} {
    margin-top: 60px;
  }
`;

const ContactsListWrapper = styled.div`
  margin: 24px 8px;

  @media ${media.medium} {
    margin: 60px 120px;
  }
`;

const Dashboard = ({ setDashboardParams, resetSearch }) => {
  const { search } = useLocation();

  useEffect(() => {
    setDashboardParams(search);
  }, [search, setDashboardParams]);

  useEffect(() => resetSearch, [resetSearch]);

  return (
    <div>
      <PickerWrapper>
        <Picker />
      </PickerWrapper>
      <PositionedDivider />
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <ContactsListWrapper>
        <ContactsList />
      </ContactsListWrapper>
    </div>
  );
};

const mapDispatchToProps = {
  setDashboardParams: dashboardActions.setDashboardParams,
  resetSearch: dashboardActions.resetSearchQuery,
};

export default connect(null, mapDispatchToProps)(Dashboard);
