import React from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container mt-3">
        <BookList />
      </div>
    </div>
  );
};

export default App;
