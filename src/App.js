import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import BattleBox from './components/BattleBox';

const App = () => {
  const [firstPokemon, setFirstPokemon] = useState(0);
  const [secondPokemon, setSecondPokemon] = useState(0);

  const handleClick = () => {
    setFirstPokemon(Math.floor(Math.random() * 151));
    setSecondPokemon(Math.floor(Math.random() * 151));
  };

  return (
    <div className="App">
      <div className="Main">
        <Header />
        <BattleBox />
      </div>
    </div>
  );
};

export default App;
