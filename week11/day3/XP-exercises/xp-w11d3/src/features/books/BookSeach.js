import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks } from './booksSlice'; // Импорт вашего Redux действия

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(''); // Добавлено состояние для категории
  const dispatch = useDispatch();

  const handleSearch = async () => {
    // Получение книг на основе searchTerm и category из API
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&subject:${category}`
    );
    const data = await response.json();

    // Обновление Redux состояния полученными данными
    dispatch(setBooks(data.items));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BookSearch;
