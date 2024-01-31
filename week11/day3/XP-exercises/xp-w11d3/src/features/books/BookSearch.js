import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, selectBooks } from '../../features/books/booksSlice.js';
import './BookSearch.css'; 
import { nanoid } from 'nanoid';

function BookSearch() {
  const dispatch = useDispatch();
  const booksStatus = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);
  const books = useSelector(selectBooks);
  const [searchQuery, setSearchQuery] = useState('react'); 

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks(searchQuery));
    }
  }, [booksStatus, dispatch, searchQuery]);

  const handleSearch = () => {
    dispatch(fetchBooks(searchQuery));
  };

  if (booksStatus === 'loading') {
    return <div>Loading...</div>;
  } else if (booksStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Book Search</h2>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="book-list"> 
        {books.map((book) => (
          <li className="book-item" key={nanoid()}> 
            {book.volumeInfo.title} - {book.volumeInfo.authors}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
