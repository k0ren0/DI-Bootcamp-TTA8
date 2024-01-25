import React from 'react';


const Card = ({ hero, onCardClick }) => {
  return (
    <div className="card" onClick={() => onCardClick(hero)}>
      <img src={hero.image} alt={hero.name} />
      <div className="card-info">
        <h3>Name: {hero.name}</h3>
        <p>Occupation: {hero.occupation}</p>
      </div>
    </div>
  );
};

export default Card;
