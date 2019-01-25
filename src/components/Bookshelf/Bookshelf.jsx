import Book from '../Book/Book';
import React from 'react';

const renderBook = book => (
    <li key={book.id} >
        <Book title={book.title} authors={book.authors} backgroundImage={book.backgroundImage} />
    </li>
);

export default ({title, books}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => renderBook(book))}
            </ol>
        </div>
    </div>
);
