import React, { useState } from 'react';
import './styles/main.scss';
import Spiral from './components/Spiral/Spiral';
import Header from './components/Header/Header';
import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator';

const App: React.FC = () => {
  //fazer desenho das bordas da espiral
  //criar vetor com os estados, borda cima, baixo, esquerda, direita e combinações
  //na função da spiral setar o estado, criar prop no dot e mudar a border

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

  function changeActiveColor(color: any) {
    setActiveColor(color);
    console.log(color);
  }

  return (
    <div className="flex bg-black h-screen justify-between relative">
      <Header activeColor={activeColor} />
      <Spiral
        min={1}
        max={maxNumber}
        startDotSize={8}
        activeColor={activeColor}
        changeActiveColor={changeActiveColor}
        setMaxNumber={setMaxNumber}
      />
    </div>
  );
};

export default App;
