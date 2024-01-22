import './App.css';
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    const { counter } = this.state;
    if (counter === 5) {
      throw new Error("I crashed!");
    } else {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Error Boundary in 10 min</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />         
      </ErrorBoundary>
      
      <ErrorBoundary>
        <BuggyCounter />        
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />        
      </ErrorBoundary>
      <BuggyCounter />
      </header>
    </div>
  );
}


export default App;
