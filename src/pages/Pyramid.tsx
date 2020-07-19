import React, { useState } from 'react';
import Pyramid from '../components/Pyramid/Pyramid';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const PyramidPage: React.FC = () => {
  const [rows, setRows] = useState(20);
  const [density, setDensity] = useState(30);

  return (
    <div className="flex flex-col md:flex-row bg-black h-screen justify-between relative">
      <Header />
      <Pyramid rows={rows} density={density} startDotSize={8} setRows={setRows} setDensity={setDensity} />
    </div>
  );
};

export default PyramidPage;
