import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchBooks } from "../../modules/books/books-actions";
import { getBooksSearch } from "../../modules/books/books-selectors";
import Book from "../../components/Book/Book";

const Search = props => {
  const handleChange = e => props.searchBooks(e.target.value);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
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
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.searchedBooks.map(book => (
            <Book key={book.id} book={book} handleOnChange={() => {}} />
          ))}
        </ol>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchedBooks: getBooksSearch(state)
});

export default connect(
  mapStateToProps,
  { searchBooks }
)(Search);
