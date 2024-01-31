import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBooks,
  selectCategories,
  selectSelectedCategory,
  setSelectedCategory,
} from './booksSlice'; 

const BookList = () => {
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const handleChangeCategory = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <div>
      <h2>Books List</h2>
      <div>
        <label>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={handleChangeCategory}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {books
          .filter((book) => {
            return (
              selectedCategory === 'All' ||
              (book.volumeInfo.categories &&
                book.volumeInfo.categories.includes(selectedCategory))
            );
          })
          .map((book) => (
            <li key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
              <p>Category: {book.volumeInfo.categories || 'Unknown'}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookList;
