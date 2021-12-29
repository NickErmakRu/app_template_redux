import React from "react";
import BookList from "../bookList";
import ShoppingCartTable from "../shoppingCartTable";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
