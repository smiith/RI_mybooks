import React from "react";
import { connect } from "react-redux";
import { changeShelf } from "../../modules/books/books-actions";

const renderAuthor = (author, i) => (
  <div key={i} className="book-authors">
    {author}
  </div>
);

const Book = ({ book, handleOnChange, shelf }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              book && book.imageLinks && book.imageLinks.smallThumbnail
                ? `url(${book.imageLinks.smallThumbnail})`
                : undefined
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => handleOnChange(book, e.target.value)}
            value={shelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && book.authors.map(renderAuthor)}
    </div>
  </li>
);

export default connect(
  null,
  { handleOnChange: changeShelf }
)(Book);
