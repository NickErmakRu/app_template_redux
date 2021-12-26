import React from "react";
import "./bookListItem.scss";

const BookListItem = ({ book }) => {
  const { title } = book;
  return (
    <>
      <span>{title}</span>
    </>
  );
};

export default BookListItem;
