import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spiral from '../pages/Spiral';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Spiral} />
        <Route exact path="/spiral" component={Spiral} />
        <Route exact path="/pyramid" component={Spiral} />
      </Switch>
    </Router>
  );
};

export default Routes;
