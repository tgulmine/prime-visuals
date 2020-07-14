import React, { useState } from 'react';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const HomePage: React.FC = () => {
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

  const [activeColor, setActiveColor] = useState(colorList[2]);
  const [secondaryColor, setSecondaryColor] = useState(colorList[10]);

  return (
    <div className="flex bg-black h-screen relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <div className="flex justify-center w-auto pl-10 pb-10 text-center items-center text-white text-2xl">
        Website made with the purpose of finding new ways of visualizing and understanding prime numbers.
      </div>
    </div>
  );
};

export default HomePage;
