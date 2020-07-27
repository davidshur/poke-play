import React from 'react';
import './App.css';

import Header from './components/Header';
import BattleBox from './components/BattleBox';

const App = () => {
  return (
    <div className='App'>
      <div className='Main'>
        <Header />
        <BattleBox />
      </div>
    </div>
  );
};

export default App;
