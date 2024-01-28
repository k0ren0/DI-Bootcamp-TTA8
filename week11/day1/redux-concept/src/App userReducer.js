import React, { createContext, useReducer, useRef } from 'react';
import './App.css';
// import Counter from './components/Counter';

export const AppContext = createContext();

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch({ type: 'increment' })}> + </button>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'decrement' })}> - </button>

        {/* <AppContext.Provider value={{ state, dispatch }}> */}
          {/* <Counter /> */}
        {/* </AppContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
