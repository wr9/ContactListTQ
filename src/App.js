import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import theme from 'style/theme';
import store from 'redux/store';

import { DeleteDialog, Header } from 'common';
import { Dashboard, CreateContact, EditContact, ContactDetails } from 'pages';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DeleteDialog />
          <Header />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/create">
              <CreateContact />
            </Route>
            <Route exact path="/edit/:id">
              <EditContact />
            </Route>
            <Route exact path="/details/:id">
              <ContactDetails />
            </Route>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
