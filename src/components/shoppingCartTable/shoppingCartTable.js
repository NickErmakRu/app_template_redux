import React from "react";
import "./shoppingCartTable.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartTable = () => {
  return (
    <div className="shoppingCartTable">
      <h2>Заказ</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Цена</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Гарри Поттер и Узник Азкабана</td>
            <td>2</td>
            <td>1780 руб.</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">
                <FontAwesomeIcon
                  className="cartTableIcon"
                  icon={faTrash}
                />
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <FontAwesomeIcon
                  className="cartTableIcon"
                  icon={faMinusCircle}
                />
              </button>
              <button className="btn btn-outline-success btn-sm">
                <FontAwesomeIcon
                  className="cartTableIcon"
                  icon={faPlusCircle}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">К оплате: 1780 руб.</div>
    </div>
  );
};

export default ShoppingCartTable;
