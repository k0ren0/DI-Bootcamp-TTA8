import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    helloMessage: '',
    personalizedHelloMessage: '',
    name: '', 
  };

  
  fetchHello = async () => {
    try {
      const response = await fetch('http://localhost:5010/hello');
      const message = await response.text();
      this.setState({ helloMessage: message });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  fetchPersonalizedHello = async () => {
    try {
      const response = await fetch(`http://localhost:5010/hello/${this.state.name}`);
      const message = await response.text();
      this.setState({ personalizedHelloMessage: message });
    } catch (error) {
      console.error('Error:', error);
    }
  };

 
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello Greetings</h1>
        </header>
        <div>
          <button onClick={this.fetchHello}>Press and Fetch Hello</button>
          <p>{this.state.helloMessage}</p>
        </div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Enter name"
          />
          <button onClick={this.fetchPersonalizedHello}>Add name and Fetch Personalized Hello</button>
          <p>{this.state.personalizedHelloMessage}</p>
        </div>
      </div>
    );
  }
}

export default App;
