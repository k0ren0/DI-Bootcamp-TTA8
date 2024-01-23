import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    input: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.getHelloMessage();
  }

  getHelloMessage = async () => {
    try {
      const response = await fetch('http://localhost:5005/api/hello');
      if (response.ok) {
        const message = await response.text();
        this.setState({ message });
      } else {
        console.error('Server response wasn\'t OK:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: this.state.input }),
      });
      if (response.ok) {
        const responseMessage = await response.text();
        this.setState({ responseToPost: responseMessage });
      } else {
        console.error('Server response wasn\'t OK:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
        </header>
        <div className="form-container">
          <label className="form-label">Post to Server:</label>
          <br/>
          <div className="input-group">
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleInputChange}
              className="text-input"
            />
            <button type="submit" onClick={this.handleSubmit} className="submit-btn">Submit</button>
          </div>
          {this.state.responseToPost && <p className="response-message">{this.state.responseToPost}</p>}
        </div>
      </div>
    );
  }
}

export default App;