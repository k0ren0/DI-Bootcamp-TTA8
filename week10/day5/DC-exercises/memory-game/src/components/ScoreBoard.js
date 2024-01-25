import React from 'react';
import "../App.css"

const ScoreBoard = ({ currentScore, topScore }) => {
  return (
    <div className="score-board">
      <div className="score-text">
        <h4>Current Score: {currentScore}</h4>
        <h4>Top Score: {topScore}</h4>
      </div>
    </div>
  );
};

export default ScoreBoard;
