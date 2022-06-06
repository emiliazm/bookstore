import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

export default function store() { configureStore(reducer); }
