import React from 'react';
import logo from './logo.svg';
import BookSearch from './features/books/BookSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookSearch />
      </header>
    </div>
  );
}

export default App;
