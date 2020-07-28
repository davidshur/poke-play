import React from 'react';
import useFetch from '../hooks/useFetch';
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const BattleBox = () => {
  const [firstPokemonData, setFirstPokemonUrl] = useFetch();
  const [secondPokemonData, setSecondPokemonUrl] = useFetch();

  // TODO(davidshur): refactor to only have one hook and reduce amount of
  // useState above (can have one function that picks the ID and does the fetch
  // all in one go for simplicity, code deduplication, and organization).

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
          {firstPokemonData && (
            <p>
              Pokemon #{firstPokemonData.id}: {firstPokemonData.name}
            </p>
          )}
        </header>
        <div className="Versus">
          <h4>VS</h4>
        </div>
        <header className="Battler">
          {secondPokemonData && (
            <p>
              Pokemon #{secondPokemonData.id}: {secondPokemonData.name}
            </p>
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
