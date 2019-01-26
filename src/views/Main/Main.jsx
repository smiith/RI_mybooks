import React from "react";
import { connect } from "react-redux";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import {
  getCurrentlyReadingBooks,
  getReadBooks,
  getWantToReadBooks
} from "../../modules/books/books-selectors";
import { getAllBooks, changeShelf } from "../../modules/books/books-actions";

class Main extends React.Component {
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
                handleOnChange={this.props.changeShelf}
              />
              <Bookshelf
                title="Want to Read"
                books={this.props.booksWantToRead}
                handleOnChange={this.props.changeShelf}
              />
              <Bookshelf
                title="Read"
                books={this.props.booksRead}
                handleOnChange={this.props.changeShelf}
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
  { getAllBooks, changeShelf }
)(Main);
