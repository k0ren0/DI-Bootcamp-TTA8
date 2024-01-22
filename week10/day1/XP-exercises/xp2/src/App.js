import './App.css';
import React, { Component } from "react"

class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate(pervProps, prevState) {
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow" });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 style={{ border: '1px solid grey' }}>{this.state.favoriteColor}</h1>
        <button onClick={() => this.setState({ favoriteColor: 'blue' })}>
          Change Color to Blue
        </button>
      </div>
    );
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ColorComponent />
      </header>
    </div>
  );
}

export default App;
