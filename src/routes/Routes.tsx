import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Spiral from '../pages/Spiral';
import Pyramid from '../pages/Pyramid';
import { colorList } from '../utils/colorList';

const Routes = () => {
  const [activeColor, setActiveColor] = useState(colorList[2]);
  const [secondaryColor, setSecondaryColor] = useState(colorList[10]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home activeColor={activeColor} secondaryColor={secondaryColor} />} />
        <Route
          exact
          path="/spiral"
          component={() => (
            <Spiral
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              secondaryColor={secondaryColor}
              setSecondaryColor={setSecondaryColor}
            />
          )}
        />
        <Route
          exact
          path="/pyramid"
          component={() => (
            <Pyramid
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              secondaryColor={secondaryColor}
              setSecondaryColor={setSecondaryColor}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
