import { createContext, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{count, setCount, name: "Yuri"}}>
          <Counter count={count} setCount={setCount}/>
        </AppContext.Provider>
       

      </header>
    </div>
  );
}

export default App;
