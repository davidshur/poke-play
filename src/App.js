import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, useCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">The count is {count}!</header>
    </div>
  );
};

export default App;
