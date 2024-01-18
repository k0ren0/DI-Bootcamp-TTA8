import React from 'react';

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

function PlanetList() {
  return (
    <ul className="list-group">
      {planets.map((planet, index) => (
        <li key={index} className="list-group-item">
          <span>{planet}</span>
        </li>
      ))}
    </ul>
  );
}

export default PlanetList;
