import * as BooksAPI from "../../BooksAPI";

export const ACTIONS = {
  BOOKS_LOADED: "books/books_loaded",
  BOOKS_SEARCH_LOADED: "books/books_search_loaded"
};

export const getAllBooks = () => {
  return function(dispatch) {
    return BooksAPI.getAll().then(books =>
      dispatch({ type: ACTIONS.BOOKS_LOADED, payload: books })
    );
  };
};

export const changeShelf = (book, shelf) => dispatch =>
  BooksAPI.update(book, shelf).then(() => dispatch(getAllBooks()));

export const searchBooks = query => dispatch =>
  BooksAPI.search(query).then(books =>
    dispatch({
      type: ACTIONS.BOOKS_SEARCH_LOADED,
      payload: Array.isArray(books) ? books : []
    })
  );
