import React, { useState, Dispatch, SetStateAction } from 'react';
import './SpiralOptions.scss';

interface SpiralOptionsProps {
  setShowNumbers: Dispatch<SetStateAction<boolean>>;
}

const SpiralOptions: React.FC<SpiralOptionsProps> = props => {
  const { setShowNumbers } = props;

  const [toggleShowNumbers, setToggleShowNumbers] = useState(true);

  function updateShowNumbers() {
    setShowNumbers(!toggleShowNumbers);
    setToggleShowNumbers(!toggleShowNumbers);
  }

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

  return (
    <div className="w-full flex justify-center items-center text-white">
      <div className="bg-black flex flex-row justify-center mt-32">
        <div className="flex">
          <div className="mr-4">Show numbers</div>

          <button className="flex items-center focus:outline-none" type="button" onClick={() => updateShowNumbers()}>
            <div
              className="border-blue-300 border-2 w-12 h-4 rounded-full"
              style={{
                borderColor: '#EC0F47'
              }}
            />
            <div
              className={
                toggleShowNumbers
                  ? 'SpiralOptions-toggleDotOn bg-blue-300 w-6 h-6 rounded-full absolute'
                  : 'SpiralOptions-toggleDotOff bg-blue-300 w-6 h-6 rounded-full absolute'
              }
              style={{
                backgroundColor: '#EC0F47'
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpiralOptions;
