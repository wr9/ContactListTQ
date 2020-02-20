import React from 'react';

import { Picker, Search, ContactsList } from './components';

import {
  PickerWrapper,
  PositionedDivider,
  SearchWrapper,
  ContactsListWrapper,
} from './Dashboard.styled';

const Dashboard = () => {
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

export default Dashboard;
