import React from "react";
import "./app.scss";

import withAppService from "../hoc";

const App = ({ appService }) => {
  console.log(appService.getBooks());
  return <div>React-Redux App</div>;
};

export default withAppService()(App);
