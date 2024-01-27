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

  // Определите функцию fetchBooks
  const fetchBooks = useCallback(async () => {
    if (!searchTerm) return; // Если searchTerm пуст, не делать запрос

    setError(null); // Сброс ошибки перед запросом
    try {
      const result = await axios(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      setBooks(result.data.items || []);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data: ', error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks(); // Первичный запрос при монтировании компонента
  }, [searchTerm, fetchBooks]);

  // Функция для обработки поиска
  const onSearch = () => {
    fetchBooks(); // Запустить запрос на основе searchTerm
  };

  // Функция для сортировки книг
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
