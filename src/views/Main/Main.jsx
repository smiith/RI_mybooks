import React from "react";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import * as BooksAPI from "../../BooksAPI";
import _ from 'lodash';

class Main extends React.Component {
    state = {
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
              <button onClick={() => this.props.history.push("/search/")}>Add a book</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Main
