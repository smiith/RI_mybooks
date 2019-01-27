export const getBooksOnShelfs = state => state.books;
export const getCurrentlyReadingBooks = state =>
  getBooksOnShelfs(state).filter(book => book.shelf === "currentlyReading");
export const getWantToReadBooks = state =>
  getBooksOnShelfs(state).filter(book => book.shelf === "wantToRead");
export const getReadBooks = state =>
  getBooksOnShelfs(state).filter(book => book.shelf === "read");

export const getBooksSearch = state => state.searchedBooks;

export const getBookShelfsById = state =>
  getBooksOnShelfs(state).reduce(
    (acc, book) => ({ ...acc, [book.id]: book.shelf }),
    {}
  );
