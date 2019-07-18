import React from 'react';
import GameCard from './GameCard';

const GameRow = () => {
  return (
    <div className="row row-game-board py-3">
      <div className="col-3 h-100">
        <GameCard />
      </div>
      <div className="col-3 h-100">
        <GameCard />
      </div>
      <div className="col-3 h-100">
        <GameCard />
      </div>
      <div className="col-3 h-100">
        <GameCard />
      </div>
    </div>
  );
};

export default GameRow;
