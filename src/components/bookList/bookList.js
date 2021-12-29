import React from "react";
import { connect } from "react-redux";
import "./bookList.scss";

import { booksLoaded } from "../../reduxconfig/actions";
import { compose } from "../../utils";

import withAppService from "../hoc";
import BookListItem from "../bookListItem";
import Spinner from "../spinner";

const BookList = ({
  books,
  isLoading,
  appService,
  booksLoaded,
}) => {
  React.useEffect(() => {
    appService.getBooks().then((data) => {
      booksLoaded(data);
    });
  }, [appService, booksLoaded]);

  if (isLoading) {
    return <Spinner />;
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

const mapStateToProps = ({ books, isLoading }) => {
  return {
    books,
    isLoading,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withAppService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
