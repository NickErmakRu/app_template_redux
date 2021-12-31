import React from "react";
import "./shoppingCartTable.scss";

import { connect } from "react-redux";

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from "../../reduxconfig/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartTable = ({
  items,
  total,
  onInc,
  onDec,
  onDel,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total} руб.</td>
        <td>
          <button
            onClick={() => onDel(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <FontAwesomeIcon
              className="cartTableIcon"
              icon={faTrash}
            />
          </button>
          <button
            onClick={() => onDec(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <FontAwesomeIcon
              className="cartTableIcon"
              icon={faMinusCircle}
            />
          </button>
          <button
            onClick={() => onInc(id)}
            className="btn btn-outline-success btn-sm"
          >
            <FontAwesomeIcon
              className="cartTableIcon"
              icon={faPlusCircle}
            />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shoppingCartTable">
      <h2>Заказ</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Стоимость</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">К оплате: {total} руб.</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal,
  };
};

const mapDispatchToProps = {
  onInc: bookAddedToCart,
  onDec: bookRemovedFromCart,
  onDel: allBooksRemovedFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
