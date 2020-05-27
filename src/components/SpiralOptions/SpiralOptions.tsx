import * as React from 'react';

interface SpiralOptionsProps {
  /* min: number;
  max: number; */
}

const SpiralOptions: React.FC<SpiralOptionsProps> = props => {
  /* const { min } = props;
  const { max } = props; */

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
    <div className="bg-blue w-full flex justify-center items-center text-white">
      <div className="bg-black flex flex-row justify-center">
        <div className="flex">
          <div className="">Show numbers</div>
          <div className="">tog</div>
        </div>
      </div>
    </div>
  );
};

export default SpiralOptions;
