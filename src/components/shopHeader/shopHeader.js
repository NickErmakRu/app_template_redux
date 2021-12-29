import React from "react";
import "./shopHeader.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shopHeader">
      <Link to="/">
        <div className="logo text-dark">BookStore</div>
      </Link>
      <Link to="/cart">
        <div className="shoppingCart">
          <FontAwesomeIcon
            className="cartIcon"
            icon={faShoppingCart}
          />
          {numItems} шт. ({total} руб.)
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
