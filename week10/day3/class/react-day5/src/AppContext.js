import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Action from './components/Action';
import { createContext } from "react";


/**
 * 
 * useContext / createContext
 * useRef
 * useReducer
 */


export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div className="App">
      <header className="App-header">
        <h1> React Advanced Hooks </h1>
        <AppContext.Provider value={{count, setCount, name: 'Dan'}}>
          <Display /> 
          <Action setCount={setCount} count={count}/>
        </AppContext.Provider>

      </header>
    </div>
  );
}

export default App;

// // Компонент Display, который показывает значение счетчика
// const Display = ({ count }) => <h2>{count}</h2>;

// // Компонент Button, который позволяет изменять значение счетчика
// // Добавлен параметр text для отображения текста на кнопке
// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// // Корневой компонент App
// function App() {
//   const [count, setCount] = useState(0); // Начальное состояние счетчика

//   const incrementCounter = () => setCount(count + 1); // Функция для увеличения счетчика
//   const decrementCounter = () => setCount(count - 1); // Функция для уменьшения счетчика

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> React Advanced Hooks </h1>
//         <Display count={count} /> {/* Компонент для отображения счетчика */}
//         <Button onClick={incrementCounter} text="Up counter" /> {/* Кнопка для увеличения счетчика */}
//         <Button onClick={decrementCounter} text="Down counter" /> {/* Кнопка для уменьшения счетчика */}
//       </header>
//     </div>
//   );
// }

// export default App;