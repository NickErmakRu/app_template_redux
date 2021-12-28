import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

import ShopHeader from "../shopHeader";
import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={2} total={1790} />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cart" element={<CartPage />} exact />
      </Routes>
    </main>
  );
};

export default App;
