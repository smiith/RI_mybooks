import React from "react";
import { connect } from "react-redux";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import {
  getCurrentlyReadingBooks,
  getReadBooks,
  getWantToReadBooks
} from "../../modules/books/books-selectors";

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
              />
              <Bookshelf
                title="Want to Read"
                books={this.props.booksWantToRead}
              />
              <Bookshelf title="Read" books={this.props.booksRead} />
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

export default connect(mapStateToProps)(Main);
