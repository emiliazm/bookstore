import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="ul-container">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            id={book.id}
            bookTitle={book.bookTitle}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
