import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export function Form() {
  const empty = {
    bookTitle: '',
    author: '',
  };

  const [book, setBook] = useState(empty);

  const dispatch = useDispatch();

  const bookTitleHandler = (e) => {
    setBook({
      ...book,
      bookTitle: e.target.value,
    });
  };

  const authorHandler = (e) => {
    setBook({
      ...book,
      author: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const author = (book.author || '').trim();
    const bookTitle = (book.bookTitle || '').trim();

    if (author !== '' && bookTitle !== '') {
      const book = {
        id: uuid(),
        bookTitle,
        author,
      };

      dispatch(addBook(book));

      setBook(empty);

      document.querySelector('#title').focus();
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" type="text" placeholder="Book title" value={book.bookTitle} onChange={bookTitleHandler} />
        <input type="text" placeholder="Author" value={book.author} onChange={authorHandler} />
        <button type="submit" onClick={onSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
