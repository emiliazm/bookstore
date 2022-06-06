import React from 'react';
import Book from './Book';

const dataList = [
  {
    id: 1,
    bookTitle: 'book 1',
    author: 'author 1',
  },
  {
    id: 2,
    bookTitle: 'book 2',
    author: 'author 2',
  },
];

const BookList = () => (
  <div>
    <ul className="ul-container">
      {dataList.map((book) => {
        const {
          id,
          bookTitle,
          author,
        } = book;
        return (
          <Book key={id} id={id} bookTitle={bookTitle} author={author} />
        );
      })}
    </ul>
  </div>
);

export default BookList;
