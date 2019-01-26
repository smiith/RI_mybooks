import { ACTIONS } from "./books-actions";

const initialState = {
  books: [],
  searchedBooks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.BOOKS_LOADED:
      return { ...state, books: action.payload };

    case ACTIONS.BOOKS_SEARCH_LOADED:
      return { ...state, searchedBooks: action.payload };

    default:
      return state;
  }
}
