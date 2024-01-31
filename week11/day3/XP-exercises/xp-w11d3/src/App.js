import React from 'react';
import logo from './logo.svg';
// import BookSearch from './features/books/BookSeach';
// import BookList from './features/books/BookList';
import BookSearchAndList from "./features/books/BookSearchAndList"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <BookSearch /> */}
        {/* <BookList /> */}
        <BookSearchAndList />
      </header>
    </div>
  );
}

export default App;
