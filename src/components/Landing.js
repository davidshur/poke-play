import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [wins, setWins] = useState(0);

  const handleClick = () => {
    setWins(0);
  };

  return (
    <div className="Landing">
      <h3>Wanna play?</h3>
      <Link to="/battle" onClick={handleClick}>
        <button className="Button">BEGIN</button>
      </Link>
    </div>
  );
};

export default Landing;
