const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      title: "Book 1",
      count: 3,
      total: 1500,
    },
    {
      id: 2,
      title: "Book 2",
      count: 2,
      total: 1000,
    },
  ],
  orderTotal: 2500,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
