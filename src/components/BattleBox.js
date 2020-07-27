import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const BattleBox = () => {
  const [firstPokemonId, setFirstPokemonId] = useState(1);
  const [secondPokemonId, setSecondPokemonId] = useState(1);
  const [firstPokemon, setFirstPokemon] = useState();
  const [secondPokemon, setSecondPokemon] = useState();

  // TODO(davidshur): refactor to only have one hook and reduce amount of
  // useState above (can have one function that picks the ID and does the fetch
  // all in one go for simplicity, code deduplication, and organization).
  useEffect(() => {
    fetch(POKE_API_URL + firstPokemonId)
      .then((res) => res.json())
      .then((response) => {
        setFirstPokemon(response);
      });
  }, [firstPokemonId]);

  useEffect(() => {
    fetch(POKE_API_URL + secondPokemonId)
      .then((res) => res.json())
      .then((response) => {
        setSecondPokemon(response);
      });
  }, [secondPokemonId]);

  const handleClick = () => {
    setFirstPokemonId(Math.floor(Math.random() * 151));
    setSecondPokemonId(Math.floor(Math.random() * 151));
  };

  return (
    <>
      <div className="Splitter">
        <header className="Battler">
          {firstPokemon && (
            <p>
              Pokemon #{firstPokemon.id}: {firstPokemon.name}
            </p>
          )}
        </header>
        <div className="Versus">
          <h4>VS</h4>
        </div>
        <header className="Battler">
          {secondPokemon && (
            <p>
              Pokemon #{secondPokemon.id}: {secondPokemon.name}
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
