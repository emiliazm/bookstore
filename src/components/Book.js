import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, bookTitle, author } = props;
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="item" id={id}>
      <h2>{bookTitle}</h2>
      by
      <p>{author}</p>
      <button id={id} className="remove" type="button" onClick={removeHandler}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
