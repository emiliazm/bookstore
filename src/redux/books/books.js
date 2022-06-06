const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBOook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return [state.filter((book) => book.id !== action.id)];

    default:
      return state;
  }
}