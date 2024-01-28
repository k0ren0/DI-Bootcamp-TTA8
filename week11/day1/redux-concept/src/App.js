import Counter from './components/Counter';
import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <h1> Redux</h1>
      <Counter count={count} setCount={setCount}/>
      </header>
    </div>
  );
}

export default App;
