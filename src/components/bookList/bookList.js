import React from "react";
import { connect } from "react-redux";
import { compose } from "../../utils";
import "./bookList.scss";

import {
  fetchBooks,
  bookAddedToCart,
} from "../../reduxconfig/actions";

import withAppService from "../hoc";
import BookListItem from "../bookListItem";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="bookList">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedToCart={() => onAddedToCart(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};

const BookListContainer = ({
  books,
  isLoading,
  error,
  fetchBooks,
  onAddedToCart,
}) => {
  // использовать класс ? (#141)
  React.useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <BookList books={books} onAddedToCart={onAddedToCart} />
  );
};

const mapStateToProps = ({ books, isLoading, error }) => {
  return {
    books,
    isLoading,
    error,
  };
};

//ownProps получаем из withAppService
const mapDispatchToProps = (dispatch, ownProps) => {
  const { appService } = ownProps;
  return {
    fetchBooks: fetchBooks(appService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withAppService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
