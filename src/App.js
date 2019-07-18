import React from 'react';
import './styles/app.css';
import AppHeader from './components/AppHeader';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div id="content">
      <AppHeader />
      <br />
      <div className="ipad-test border border-dark">
        I am a div: 1020 x 762
      </div>
      <GameBoard />

    </div>
  );
}

export default App;
