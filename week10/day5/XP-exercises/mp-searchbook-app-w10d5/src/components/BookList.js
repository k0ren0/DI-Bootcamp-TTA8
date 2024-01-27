import React, { useState, useEffect, useCallback } from 'react';
import SearchBox from './SearchBox';
import BookCard from './BookCard';
import Filter from './Filter';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [error, setError] = useState(null);

  // Define the fetchBooks function
  const fetchBooks = useCallback(async () => {
    if (!searchTerm) return; // Don't make a request if searchTerm is empty
  
    setError(null); // Reset error before making a request
    try {
      const result = await axios(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      setBooks(result.data.items || []);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with an error status code
        setError(`Error: ${error.response.status} - ${error.response.statusText}`);
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        setError('No response received from the server');
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        setError('Error setting up the request');
        console.error('Request setup error:', error.message);
      }
    }
  }, [searchTerm]);
  

  useEffect(() => {
    fetchBooks(); // Initial request when the component mounts
  }, [searchTerm, fetchBooks]);

  // Function to handle search
  const onSearch = () => {
    fetchBooks(); // Trigger a request based on the searchTerm
  };

  // Function to sort books
  const sortBooks = (books, sortOrder) => {
    return books.sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate);
      } else {
        return new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate);
      }
    });
  };

  return (
    <div>
      <div className="row justify-content-center align-items-center mb-3">
        <div className="col-md-3">
          <SearchBox setSearchTerm={setSearchTerm} onSearch={onSearch} />
        </div>
        <div className="col-md-3">
          <Filter setSortOrder={setSortOrder} />
        </div>
      </div>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="row row-cols-1 row-cols-md-2 g-1">
        {sortBooks(books, sortOrder).map((book, index) => {
          return (
            <div key={book.id} className="col-md-3 book-card-container">
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
