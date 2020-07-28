import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import BattleBox from './components/BattleBox';

const App = () => {
  return (
    <div className="App">
      <div className="Main">
        <Header />
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/battle" component={BattleBox} />
        </Router>
      </div>
    </div>
  );
};

export default App;
