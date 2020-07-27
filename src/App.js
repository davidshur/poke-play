import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';

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
        <div className="Splitter">
          <header className="Battler">
            <p>Pokemon #{firstPokemon}</p>
          </header>
          <div className="Versus">
            <h4>VS</h4>
          </div>
          <header className="Battler">
            <p>Pokemon #{secondPokemon}</p>
          </header>
        </div>
        <div>
          <button className="Button" onClick={handleClick}>
            BATTLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
