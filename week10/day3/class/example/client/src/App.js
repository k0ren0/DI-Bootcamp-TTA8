import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [helloMessage, setHelloMessage] = useState('');
  const [personalizedHelloMessage, setPersonalizedHelloMessage] = useState('');
  const [name, setName] = useState('');


  // //v1 - text
  // const fetchHello = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5010/hello');
  //     const message = await response.text();
  //     setHelloMessage(message);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const fetchPersonalizedHello = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5010/hello/${name}`);
  //     const message = await response.text();
  //     setPersonalizedHelloMessage(message);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  // // v2 - json 

  // const fetchHello = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5010/hello');
  //     const data = await response.json();
  //     setHelloMessage(data.message);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const fetchPersonalizedHello = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5010/hello/${name}`);
  //     const data = await response.json();
  //     setPersonalizedHelloMessage(data.message);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // // v2.1 - json & then/catch

  const fetchHello = () => {
    fetch('http://localhost:5010/hello')
      .then(response => response.json())
      .then(data => setHelloMessage(data.message))
      .catch(error => console.error('Error:', error));
  };

  const fetchPersonalizedHello = () => {
    fetch(`http://localhost:5010/hello/${name}`)
      .then(response => response.json())
      .then(data => setPersonalizedHelloMessage(data.message))
      .catch(error => console.error('Error:', error));
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchHello}>Press and Fetch Hello</button>
        <p>{helloMessage}</p>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
          />
          <button onClick={fetchPersonalizedHello}>Add name and Fetch Personalized Hello</button>
          <p>{personalizedHelloMessage}</p>
        </div>
      </header>
    </div>
  );
}

export default App;




// // // OLD hard variant

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   state = {
//     helloMessage: '',
//     personalizedHelloMessage: '',
//     name: '', 
//   };

  
//   fetchHello = async () => {
//     try {
//       const response = await fetch('http://localhost:5010/hello');
//       const message = await response.text();
//       this.setState({ helloMessage: message });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

  
//   fetchPersonalizedHello = async () => {
//     try {
//       const response = await fetch(`http://localhost:5010/hello/${this.state.name}`);
//       const message = await response.text();
//       this.setState({ personalizedHelloMessage: message });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

 
//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Hello Greetings</h1>
//         </header>
//         <div>
//           <button onClick={this.fetchHello}>Press and Fetch Hello</button>
//           <p>{this.state.helloMessage}</p>
//         </div>
//         <div>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             placeholder="Enter name"
//           />
//           <button onClick={this.fetchPersonalizedHello}>Add name and Fetch Personalized Hello</button>
//           <p>{this.state.personalizedHelloMessage}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
