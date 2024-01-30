import React from 'react';
// import logo from './logo.svg';
import AgeControl from './features/age/AgeControl';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Age Counter With Redux</h1>
        <AgeControl />

      </header>
    </div>
  );
}

export default App;
