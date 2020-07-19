import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Spiral from '../pages/Spiral';
import Pyramid from '../pages/Pyramid';
import { ThemeProvider } from '../context/theme';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ThemeProvider>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/ulamspiral" component={() => <Spiral />} />
          <Route exact path="/parallaxcompression" component={() => <Pyramid />} />
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default Routes;
