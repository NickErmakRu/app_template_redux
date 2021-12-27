import React from "react";
import { connect } from "react-redux";
import "./bookList.scss";

import withAppService from "../hoc";
import { booksLoaded } from "../../reduxconfig/actions";
import { compose } from "../../utils";
import BookListItem from "../bookListItem";

const BookList = ({ books, appService, booksLoaded }) => {
  React.useEffect(() => {
    // receive data
    const data = appService.getBooks();

    // dispatch action to store
    booksLoaded(data);
  }, [appService, booksLoaded]);

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

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withAppService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
