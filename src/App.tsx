import * as React from 'react';
import './styles/main.scss';
import Spiral from './components/Spiral/Spiral';

const App: React.FC = () => {
  return (
    <div>
      <Spiral min={1} max={1000} />
    </div>
  );
};

export default App;
