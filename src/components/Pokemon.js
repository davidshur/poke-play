import React from 'react';

const Pokemon = ({ data }) => (
  <div>
    <img src={data.sprites.front_default} alt={data.species.name} />
  </div>
);

export default Pokemon;
