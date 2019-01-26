import React from "react";
import _ from "lodash";

const renderAuthor = (author, i) => (
  <div key={i} className="book-authors">
    {author}
  </div>
);

export default ({ book, handleOnChange }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${_.get(book, "imageLinks.smallThumbnail")})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => handleOnChange(book, e.target.value)}
            value={book.shelf}
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
      {book.authors.map(renderAuthor)}
    </div>
  </li>
);
