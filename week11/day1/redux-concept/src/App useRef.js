import React, { createContext, useState, useRef } from 'react';
import './App.css';

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Dan");

  const divRef = useRef();
  const nameInputRef = useRef();

  const handleClick = () => {
    console.log(divRef.current);
    divRef.current.style.backgroundColor = "orange";
    setName("Anne"); 
  };

  const handleCountIncrease = () => {
    setCount(count + 1);
    setName(nameInputRef.current.value); 
  };

  return (
    <div className="App">
      <header className="App-header" ref={divRef}>
        <input ref={nameInputRef} />
        <button onClick={handleClick}>Click</button>
        <h2>{name}</h2>
        <button onClick={handleCountIncrease}> + </button>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
