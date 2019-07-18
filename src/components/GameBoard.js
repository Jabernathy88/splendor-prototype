import React from 'react';
import GameCard from './GameCard';

const GameBoard = () => {
  return (
    <div id="gameBoard" className="container-fluid bg-blue-grey h-75">
      <p>Hello from GameBoard</p>
      <br />
      <GameCard />
      
    </div>
  );
};

export default GameBoard;
