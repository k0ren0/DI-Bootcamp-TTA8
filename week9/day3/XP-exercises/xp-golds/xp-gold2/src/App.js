import React from 'react';
import './App.css';
import PlanetList from './PlanetList'; // Import the PlanetList component

function App() {
  return (
    <div className="App">
      <h1>Planets</h1>
      <PlanetList /> {/* Use the PlanetList component */}
    </div>
  );
}

export default App;
