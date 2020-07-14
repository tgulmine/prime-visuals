import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Spiral from '../pages/Spiral';
import Pyramid from '../pages/Pyramid';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/spiral" component={Spiral} />
        <Route exact path="/pyramid" component={Pyramid} />
      </Switch>
    </Router>
  );
};

export default Routes;
