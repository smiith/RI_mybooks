import React from 'react';

const renderAuthor = (author,i) => (<div key={i} className="book-authors">{author}</div>);

export default ({title, authors, backgroundImage}) => (
    <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />
            <div className="book-shelf-changer">
                <select>
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
        <div className="book-title">{title}</div>
        {authors.map(renderAuthor)}
    </div>
);
