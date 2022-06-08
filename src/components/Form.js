import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export function Form() {
  const empty = {
    title: '',
    author: '',
    category: '',
  };

  const [book, setBook] = useState(empty);

  const dispatch = useDispatch();

  const bookTitleHandler = (e) => {
    setBook({
      ...book,
      title: e.target.value,
    });
  };

  const authorHandler = (e) => {
    setBook({
      ...book,
      author: e.target.value,
    });
  };

  const categoryHandler = (e) => {
    setBook({
      ...book,
      category: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const author = (book.author || '').trim();
    const title = (book.title || '').trim();
    const { category } = book;

    if (author !== '' && title !== '' && category !== '') {
      const book = {
        id: uuid(),
        title,
        author,
        category,
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
        <select value={book.category} onChange={categoryHandler}>
          <option value="">Select</option>
          <option value="option1">Option1</option>
          <option value="option2">Option2</option>
          <option value="option3">Option3</option>
        </select>
        <input id="title" type="text" placeholder="Book title" value={book.title} onChange={bookTitleHandler} />
        <input type="text" placeholder="Author" value={book.author} onChange={authorHandler} />
        <button type="submit" onClick={onSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
