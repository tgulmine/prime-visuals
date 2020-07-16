import React, { useState } from 'react';
import Spiral from '../components/Spiral/Spiral';
import Header from '../components/Header/Header';
import { colorList } from '../utils/colorList';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const SpiralPage: React.FC = () => {
  //fazer desenho das bordas da espiral
  //criar vetor com os estados, borda cima, baixo, esquerda, direita e combinações
  //na função da spiral setar o estado, criar prop no dot e mudar a border

  const [maxNumber, setMaxNumber] = useState(1000);
  const [activeColor, setActiveColor] = useState(colorList[2]);
  const [secondaryColor, setSecondaryColor] = useState(colorList[10]);

  function changeActiveColor(color: any) {
    setActiveColor(color);
  }

  return (
    <div className="flex bg-black h-screen justify-between relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <Spiral
        min={1}
        max={maxNumber}
        startDotSize={8}
        activeColor={activeColor}
        changeActiveColor={changeActiveColor}
        setSecondaryColor={setSecondaryColor}
        setMaxNumber={setMaxNumber}
      />
    </div>
  );
};

export default SpiralPage;
