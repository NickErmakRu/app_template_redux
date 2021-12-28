import React from "react";
import "./shopHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shopHeader">
      <a className="logo text-dark" href="#">
        BookStore
      </a>
      <a className="shoppingCart">
        <FontAwesomeIcon
          className="cartIcon"
          icon={faShoppingCart}
        />
        {numItems} шт. ({total} руб.)
      </a>
    </header>
  );
};

export default ShopHeader;
