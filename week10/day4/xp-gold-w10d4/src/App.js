import React from 'react';
import Todo from './components/Todo'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Todo List With React-Redux</h1>
      </header>
      <main>
      <h2>Task List:</h2>
        <Todo /> 
      </main>
    </div>
  );
}

export default App;
