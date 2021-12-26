import React from "react";
import "./bookList.scss";

import BookListItem from "../bookListItem";

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
