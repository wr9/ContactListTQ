import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import theme from 'style/theme';
import store from 'redux/store';

import { Header } from 'common';
import { Dashboard, CreateContact, EditContact } from 'pages';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/edit/:id" render={props => <EditContact {...props} />} />
            <Route exact path="/create" render={props => <CreateContact {...props} />} />
            <Route exact path="/" render={props => <Dashboard {...props} />} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
