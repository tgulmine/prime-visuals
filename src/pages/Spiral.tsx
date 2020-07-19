import React, { useState } from 'react';
import Spiral from '../components/Spiral/Spiral';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const SpiralPage: React.FC = () => {
  const [maxNumber, setMaxNumber] = useState(1000);

  return (
    <div className="flex flex-col md:flex-row bg-black h-screen justify-between relative overflow-hidden">
      <Header />
      <Spiral min={1} max={maxNumber} startDotSize={8} setMaxNumber={setMaxNumber} />
    </div>
  );
};

export default SpiralPage;
