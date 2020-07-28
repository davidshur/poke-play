import React from 'react';
import Pokemon from '../components/Pokemon';

import useFetch from '../hooks/useFetch';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const BattleBox = () => {
  const [firstPokemonData, setFirstPokemonUrl] = useFetch();
  const [secondPokemonData, setSecondPokemonUrl] = useFetch();

  const handleClick = () => {
    const firstPokemonId = Math.floor(Math.random() * 151);
    const secondPokemonId = Math.floor(Math.random() * 151);

    setFirstPokemonUrl(POKE_API_URL + firstPokemonId);
    setSecondPokemonUrl(POKE_API_URL + secondPokemonId);
  };

  return (
    <>
      <div className="Splitter">
        <header className="Battler">
          {firstPokemonData.sprites && <Pokemon data={firstPokemonData} />}
        </header>
        <div className="Versus">
          <h4>VS</h4>
        </div>
        <header className="Battler">
          {secondPokemonData.sprites && <Pokemon data={secondPokemonData} />}
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
