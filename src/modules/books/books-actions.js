import * as BooksAPI from "../../BooksAPI";

export const ACTIONS = {
  BOOKS_LOADED: "books/books_loaded"
};

export const getAllBooks = () => {
  return function(dispatch) {
    return BooksAPI.getAll().then(books => {
      dispatch({ type: ACTIONS.BOOKS_LOADED, payload: books });
    });
  };
};

export const changeShelf = (book, shelf) => dispatch =>
  BooksAPI.update(book, shelf).then(() => dispatch(getAllBooks()));
