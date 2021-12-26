import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/cart" element={<CartPage />} exact />
    </Routes>
  );
};

export default App;
