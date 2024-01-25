import React from 'react';
import './App.css';
import { MemoryGame } from './components/MemoryGame';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Superheroes Memory Game</h1>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
      </header>
      <MemoryGame />
    </div>
  );
}

export default App;
