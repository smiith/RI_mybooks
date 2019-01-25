import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import _ from 'lodash';
import Bookshelf from './components/Bookshelf/Bookshelf'


class BooksApp extends React.Component {
    state = {
        showSearchPage: false,
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

    getAllBooks = () => {
      BooksAPI.getAll().then(books => this.setState({
         currentlyReading: _.filter(books, ['shelf', 'currentlyReading']),
         wantToRead: _.filter(books, ['shelf', 'wantToRead']),
         read: _.filter(books, ['shelf', 'read']),
      }));
    }

    changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(this.getAllBooks);
    }

  componentDidMount() {
     this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}>
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms in SEARCH_TERMS.MD

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" books={this.state.currentlyReading} handleOnChange={this.changeShelf}/>
                <Bookshelf title="Want to Read" books={this.state.wantToRead} handleOnChange={this.changeShelf}/>
                <Bookshelf title="Read" books={this.state.read} handleOnChange={this.changeShelf}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
