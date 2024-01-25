import './App.css';
import { useState, useReducer } from 'react';

const initialState = {
  count: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.by };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <h2>useState</h2>
        <button onClick={() => setCount(count + 1)}> + </button>
        {count}
        <button onClick={() => setCount(count - 1)}> - </button>
        
        <h2>useReducer</h2>
        <button onClick={() => dispatch({ type: "increment", by: 1 })}> + </button>
        {state.count}
        <button onClick={() => dispatch({ type: "decrement" })}> - </button>
      </header>
    </div>
  );
}

export default App;
