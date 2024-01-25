import React, { useState, useEffect } from 'react';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import superheroesData from '../data/superheroes.json';
import "../App.css"

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const MemoryGame = () => {
  const initialHeroesData = superheroesData;

  const [heroes, setHeroes] = useState(shuffleArray(initialHeroesData.superheroes));
  const [pickedIds, setPickedIds] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    setHeroes((prevHeroes) => shuffleArray(prevHeroes));
  }, [pickedIds]);
  

  const handleCardClick = (hero) => {
    if (pickedIds.has(hero.id)) {
      setCurrentScore(0);
      setPickedIds(new Set());
    } else {
      setCurrentScore(currentScore + 1);
      setPickedIds(new Set(pickedIds.add(hero.id)));
      if (currentScore + 1 > topScore) {
        setTopScore(currentScore + 1);
      }
    }
  };

  return (
    <div>
      <ScoreBoard currentScore={currentScore} topScore={topScore} />
      <div className="game-board">
        {heroes.map((hero) => (
          <Card key={hero.id} hero={hero} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;