import React from 'react';

import { Picker, Divider, Search, ContactsList } from './components';

import {
  PickerWrapper,
  DividerWrapper,
  SearchWrapper,
  ContactsListWrapper,
} from './Dashboard.styled';

const Dashboard = () => {
  return (
    <div>
      <PickerWrapper>
        <Picker />
      </PickerWrapper>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
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
