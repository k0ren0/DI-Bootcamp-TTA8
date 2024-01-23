import './App.css';
import React, { Component} from "react";
import Example1 from './components/Example1.js';
import Example2 from './components/Example2.js';
import Example3 from './components/Example3.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Example 1</h1>
        <Example1 />

        <h1>Example 2</h1>
        <Example2 />

        <h1>Example 3</h1>
        <Example3 />
      </div>
    );
  }
}

export default App;
