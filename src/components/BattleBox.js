import React, { useState } from 'react';
import Pokemon from '../components/Pokemon';

import useFetch from '../hooks/useFetch';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const BattleBox = () => {
  const [firstPokemonData, setFirstPokemonUrl] = useFetch();
  const [secondPokemonData, setSecondPokemonUrl] = useFetch();

  const [selected, setSelected] = useState('left');

  const handleClick = () => {
    const firstPokemonId = Math.floor(Math.random() * 151);
    const secondPokemonId = Math.floor(Math.random() * 151);

    setFirstPokemonUrl(POKE_API_URL + firstPokemonId);
    setSecondPokemonUrl(POKE_API_URL + secondPokemonId);
  };

  return (
    <>
      <div className="Splitter">
        <header className="Battler" onClick={() => setSelected('left')}>
          {firstPokemonData.sprites && (
            <div
              className="Selector"
              style={
                selected === 'left' ? { width: '100px' } : { border: 'none' }
              }
            >
              <Pokemon data={firstPokemonData} />
            </div>
          )}
        </header>
        <div className="Versus">
          <h4>VS</h4>
        </div>
        <header className="Battler" onClick={() => setSelected('right')}>
          {secondPokemonData.sprites && (
            <div
              className="Selector"
              style={
                selected === 'right' ? { width: '100px' } : { border: 'none' }
              }
            >
              <Pokemon data={secondPokemonData} />
            </div>
          )}
        </header>
      </div>
      <div>
        <button className="Button" onClick={handleClick}>
          BATTLE
        </button>
      </div>
    </>
  );
};

export default BattleBox;
