import React from 'react';
import Book from '../Book/Book';

export default ({title, books, handleOnChange}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => <Book key={book.id} book={book} handleOnChange={handleOnChange} />)}
            </ol>
        </div>
    </div>
);
