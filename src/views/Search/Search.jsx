import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchBooks,
  clearSearchBooks
} from "../../modules/books/books-actions";
import {
  getBookShelfsById,
  getBooksSearch
} from "../../modules/books/books-selectors";
import Book from "../../components/Book/Book";

class Search extends React.Component {
  handleChange = e =>
    e.target.value
      ? this.props.searchBooks(e.target.value)
      : this.props.clearSearchBooks();

  shelfLookup = id =>
    id in this.props.booksOnShelfs ? this.props.booksOnShelfs[id] : "none";

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            onClick={this.props.clearSearchBooks}
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms in SEARCH_TERMS.MD

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchedBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                shelf={this.shelfLookup(book.id)}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchedBooks: getBooksSearch(state),
  booksOnShelfs: getBookShelfsById(state)
});

export default connect(
  mapStateToProps,
  { searchBooks, clearSearchBooks }
)(Search);
