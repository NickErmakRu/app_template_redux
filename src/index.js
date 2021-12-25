import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppServiceProvider } from "./components/appServiceContext";

import App from "./components/app";
import ErrorBoundry from "./components/errorBoundry";
import BookstoreService from "./services/appService";

import store from "./store";

const bookstoreService = new BookstoreService();

const MainComponent = () => {
  return (
    <Provider store={store}>
      <ErrorBoundry>
        <AppServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </AppServiceProvider>
      </ErrorBoundry>
    </Provider>
  );
};

ReactDOM.render(
  <MainComponent />,
  document.getElementById("root")
);
