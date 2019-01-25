import React from 'react';
import Book from '../Book/Book';
import _ from 'lodash';

const renderBook = book => (
    <li key={book.id} >
        <Book title={book.title} authors={book.authors} backgroundImage={_.get(book, 'imageLinks.smallThumbnail')} />
    </li>
);

export default ({title, books}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(renderBook)}
            </ol>
        </div>
    </div>
);
