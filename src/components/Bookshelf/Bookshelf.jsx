import React from 'react';
import Book from '../Book/Book';


const renderBook = (book, handleOnChange) => (
    <li key={book.id} >
        <Book book={book} handleOnChange={handleOnChange} />
    </li>
);

export default ({title, books, handleOnChange}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => renderBook(book, handleOnChange))}
            </ol>
        </div>
    </div>
);
