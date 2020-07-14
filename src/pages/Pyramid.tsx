import React, { useState } from 'react';
import Pyramid from '../components/Pyramid/Pyramid';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const PyramidPage: React.FC = () => {
  const colorList = [
    'rgba(251, 191, 84, 1)',
    'rgba(238, 107, 59, 1)',
    'rgba(236, 15, 71, 1)',
    'rgba(160, 44, 93, 1)',
    'rgba(112, 4, 96, 1)',
    'rgba(2, 44, 122, 1)',
    'rgba(171, 217, 109, 1)',
    'rgba(21, 194, 134, 1)',
    'rgba(8, 115, 83, 1)',
    'rgba(4, 84, 89, 1)',
    'rgba(38, 41, 73, 1)',
    'rgba(26, 19, 51, 1)'
  ];
  const [rows, setRows] = useState(4);
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
      />
    </div>
  );
};

export default PyramidPage;
