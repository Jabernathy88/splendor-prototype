import React from 'react';
import './styles/app.css';
import AppHeader from './components/AppHeader';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div id="content">
      <AppHeader />
      <GameBoard />

    </div>
  );
}

export default App;
