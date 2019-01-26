import React from "react";
import { connect } from "react-redux";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import * as BooksAPI from "../../BooksAPI";
import {
  getCurrentlyReadingBooks,
  getReadBooks,
  getWantToReadBooks
} from "../../modules/books/books-selectors";
import { getAllBooks } from "../../modules/books/books-actions";

class Main extends React.Component {
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.props.getAllBooks);
  };

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                title="Currently Reading"
                books={this.props.booksCurrentlyReading}
                handleOnChange={this.changeShelf}
              />
              <Bookshelf
                title="Want to Read"
                books={this.props.booksWantToRead}
                handleOnChange={this.changeShelf}
              />
              <Bookshelf
                title="Read"
                books={this.props.booksRead}
                handleOnChange={this.changeShelf}
              />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.props.history.push("/search/")}>
              Add a book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksCurrentlyReading: getCurrentlyReadingBooks(state),
  booksWantToRead: getWantToReadBooks(state),
  booksRead: getReadBooks(state)
});
export default connect(
  mapStateToProps,
  { getAllBooks }
)(Main);
