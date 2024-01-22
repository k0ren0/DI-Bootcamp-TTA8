import React, { Component } from 'react';

class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  handleDeleteClick = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1> My Favorite color is <span style={{ color: this.state.favoriteColor }}> {this.state.favoriteColor}</span></h1>
        <button onClick={() => this.setState({ favoriteColor: 'blue' })}>
          Change Color to Blue
        </button>
        <button onClick={this.handleDeleteClick}>Delete Header</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ColorComponent />
        </header>
      </div>
    );
  }
}

export default App;
