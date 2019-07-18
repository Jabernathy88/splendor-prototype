import React from 'react';
import GameRow from './GameRow';

const GameBoard = () => {
  return (
    <div id="gameBoard" className="container-fluid bg-blue-grey py-3">
      <GameRow />
      <GameRow />
      <GameRow />
      <br />
    </div>
  );
};

export default GameBoard;
