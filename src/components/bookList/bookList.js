import React from "react";
import { connect } from "react-redux";
import "./bookList.scss";

import {
  booksLoaded,
  booksRequested,
  booksError,
} from "../../reduxconfig/actions";
import { compose } from "../../utils";

import withAppService from "../hoc";
import BookListItem from "../bookListItem";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";

const BookList = ({
  books,
  isLoading,
  error,
  appService,
  booksLoaded,
  booksRequested,
  booksError,
}) => {
  React.useEffect(() => {
    booksRequested();
    appService
      .getBooks()
      .then((data) => {
        booksLoaded(data);
      })
      .catch((error) => booksError(error));
  }, [appService, booksError, booksLoaded, booksRequested]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <ul className="bookList">
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

const mapStateToProps = ({ books, isLoading, error }) => {
  return {
    books,
    isLoading,
    error,
  };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  withAppService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
