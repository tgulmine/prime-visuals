import React, { useState } from 'react';
import Pyramid from '../components/Pyramid/Pyramid';
import Header from '../components/Header/Header';
import { colorList } from '../utils/colorList';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const PyramidPage: React.FC = () => {
  const [rows, setRows] = useState(20);
  const [density, setDensity] = useState(30);
  const [activeColor, setActiveColor] = useState(colorList[2]);
  const [secondaryColor, setSecondaryColor] = useState(colorList[10]);

  function changeActiveColor(color: any) {
    setActiveColor(color);
  }

  return (
    <div className="flex bg-black h-screen justify-between relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <Pyramid
        rows={rows}
        density={density}
        startDotSize={8}
        activeColor={activeColor}
        changeActiveColor={changeActiveColor}
        setSecondaryColor={setSecondaryColor}
        setRows={setRows}
        setDensity={setDensity}
      />
    </div>
  );
};

export default PyramidPage;
