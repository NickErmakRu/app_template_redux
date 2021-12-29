const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

//внутренняя функция предназначена для компонента,
//а внешняя - для работы в mapDispatchToProps
const fetchBooks = (appService, dispatch) => () => {
  dispatch(booksRequested());
  appService
    .getBooks()
    .then((data) => {
      dispatch(booksLoaded(data));
    })
    .catch((error) => dispatch(booksError(error)));
};

export { fetchBooks };
