import './App.css';
import Counter from './components/Counter';
import Child from './components/Child';
import Parent from './components/Parent';
import ErrorBoundary from './ErrorBoundary';


function App() {
return (
    <div className="App">
      <header className="App-header">
        <h1>Error Boundary in 10 min</h1>
        
        <ErrorBoundary>
          <Parent auth="admin">
            <Child />
            <Counter />
          </Parent>
        </ErrorBoundary>
        
        {/* <Counter />
        <Counter /> */}
      </header>
    </div>
  );
}

export default App;
