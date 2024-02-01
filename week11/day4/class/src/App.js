import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { useState, useCallback, useMemo } from "react";
import ToDo from './ToDo';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  
  const addTask = () => {
    setTodos((todos) => [...todos, "new todo"]);
  };

  // const addTask = useCallback(() => {
  //   setTodos((todos) => [...todos, "new todo"]);
  // },[todos]);
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        {count}
        <button onClick={increment}>+</button>
        <ToDo todos = {todos} addTask={addTask}/>

      </header>
    </div>
  );
}

export default App;
