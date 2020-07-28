import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="Landing">
    <h3>Wanna play?</h3>
    <Link to="/battle">
      <button className="Button">BEGIN</button>
    </Link>
  </div>
);

export default Landing;
