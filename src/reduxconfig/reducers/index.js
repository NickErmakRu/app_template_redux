const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 2500,
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + book.price * quantity,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  const book = books.find((book) => book.id === bookId);
  const itemId = cartItems.findIndex(
    (item) => item.id === bookId
  );
  const item = cartItems[itemId];
  const newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(
      state.cartItems,
      newItem,
      itemId
    ),
  };
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
    case "BOOK_ADDED_TO_CART": {
      return updateOrder(state, action.payload, 1);
    }
    case "BOOK_REMOVED_FROM_CART": {
      return updateOrder(state, action.payload, -1);
    }
    case "ALL_BOOKS_REMOVED_FROM_CART": {
      const item = state.cartItems.find(
        (book) => book.id === action.payload
      );
      return updateOrder(
        state,
        action.payload,
        -item.count
      );
    }
    default:
      return state;
  }
};

export default reducer;
