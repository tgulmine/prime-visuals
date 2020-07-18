import React, { useState, Dispatch, SetStateAction } from 'react';
import Spiral from '../components/Spiral/Spiral';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

interface SpiralPageProps {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  secondaryColor: string;
  setSecondaryColor: Dispatch<SetStateAction<string>>;
}

const SpiralPage: React.FC<SpiralPageProps> = props => {
  const { activeColor } = props;
  const { setActiveColor } = props;
  const { secondaryColor } = props;
  const { setSecondaryColor } = props;

  const [maxNumber, setMaxNumber] = useState(1000);

  return (
    <div className="flex flex-col md:flex-row bg-black h-screen justify-between relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <Spiral
        min={1}
        max={maxNumber}
        startDotSize={8}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        setSecondaryColor={setSecondaryColor}
        setMaxNumber={setMaxNumber}
      />
    </div>
  );
};

export default SpiralPage;
