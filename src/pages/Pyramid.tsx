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
  const [maxNumber, setMaxNumber] = useState(1000);
  const [activeColor, setActiveColor] = useState(colorList[2]);
  const [secondaryColor, setSecondaryColor] = useState(colorList[10]);

  function changeActiveColor(color: any) {
    setActiveColor(color);
  }

  return (
    <div className="flex bg-black h-screen justify-between relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <Pyramid
        rows={1}
        density={maxNumber}
        startDotSize={8}
        activeColor={activeColor}
        changeActiveColor={changeActiveColor}
        setSecondaryColor={setSecondaryColor}
        setMaxNumber={setMaxNumber}
      />
    </div>
  );
};

export default PyramidPage;
