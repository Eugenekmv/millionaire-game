import React from 'react';

import Finish from './pages/Finish';
import Game from './pages/Game';
import Start from './pages/Start';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/start" exact component={Start} />
        <Route path="/game" exact component={Game} />
        <Route path="/finish" exact component={Finish} />
        <Redirect to="/start" />
      </Switch>
    </div>
  );
}

export default App;
