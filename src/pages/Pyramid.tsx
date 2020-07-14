import React, { useState } from 'react';
import Pyramid from '../components/Pyramid/Pyramid';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const PyramidPage: React.FC = () => {
  const colorList = [
    '#FBBF54',
    '#EE6B3B',
    '#EC0F47',
    '#A02C5D',
    '#700460',
    '#022C7A',
    '#ABD96D',
    '#15C286',
    '#087353',
    '#045459',
    '#262949',
    '#1A1333'
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
