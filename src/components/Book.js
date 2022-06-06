import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, bookTitle, author } = props;
  return (
    <li className="item" id={id}>
      <h2>{bookTitle}</h2>
      by
      <p>{author}</p>
      <button id={id} className="remove" type="button">
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
