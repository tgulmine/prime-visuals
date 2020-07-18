import React, { useState, Dispatch, SetStateAction } from 'react';
import Pyramid from '../components/Pyramid/Pyramid';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

interface PyramidPageProps {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  secondaryColor: string;
  setSecondaryColor: Dispatch<SetStateAction<string>>;
}

const PyramidPage: React.FC<PyramidPageProps> = props => {
  const { activeColor } = props;
  const { setActiveColor } = props;
  const { secondaryColor } = props;
  const { setSecondaryColor } = props;

  const [rows, setRows] = useState(20);
  const [density, setDensity] = useState(30);

  return (
    <div className="flex flex-col md:flex-row bg-black h-screen justify-between relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <Pyramid
        rows={rows}
        density={density}
        startDotSize={8}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        setSecondaryColor={setSecondaryColor}
        setRows={setRows}
        setDensity={setDensity}
      />
    </div>
  );
};

export default PyramidPage;
