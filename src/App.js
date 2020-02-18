import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "style/theme";
import store from "redux/store";

import { Header } from "components";
import { Dashboard } from "pages";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
