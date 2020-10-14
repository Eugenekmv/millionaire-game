import React from 'react';

import Finish from './pages/Finish';
import Game from './pages/Game';
import Start from './pages/Start';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/millionaire-game/start" exact component={Start} />
        <Route path="/millionaire-game/game" exact component={Game} />
        <Route path="/millionaire-game/finish" exact component={Finish} />
        <Redirect to="/millionaire-game/start" />
      </Switch>
    </div>
  );
}

export default App;
