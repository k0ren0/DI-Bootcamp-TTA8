import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBooks,
  selectCategories,
  selectSelectedCategory,
  setBooks,
  setSelectedCategory,
} from './booksSlice'; 
import './BookSearchAndList.css';

const BookSearchAndList = () => {
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&subject:${selectedCategory}`
    );
    const data = await response.json();
    dispatch(setBooks(data.items));
  };

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
      <div>
        <input
          type="text"
          placeholder="Search for books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="book-list">
        {books
          .filter((book) => {
            return (
              selectedCategory === 'All' ||
              (book.volumeInfo.categories &&
                book.volumeInfo.categories.includes(selectedCategory))
            );
          })
          .map((book) => (
            <li key={book.id} className="book-item">
              <h3>{book.volumeInfo.title}</h3>
              <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
              <p>Category: {book.volumeInfo.categories || 'Unknown'}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookSearchAndList;
