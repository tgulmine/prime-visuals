import * as React from 'react';
import './styles/main.scss';
import Spiral from './components/Spiral/Spiral';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="flex flex-row bg-black h-screen">
      <Header />
      <Spiral min={1} max={1000} />
    </div>
  );
};

export default App;
