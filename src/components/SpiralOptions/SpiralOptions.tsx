import React, { useState, Dispatch, SetStateAction } from 'react';
import './SpiralOptions.scss';
import ColorBox from '../ColorBox/ColorBox';
import ToggleDot from '../ToggleDot/ToggleDot';

interface SpiralOptionsProps {
  setShowNumbers: Dispatch<SetStateAction<boolean>>;
  setShowSquares: Dispatch<SetStateAction<boolean>>;
  setShowEvens: Dispatch<SetStateAction<boolean>>;
  setDotSize: Dispatch<SetStateAction<number>>;
  activeColor: string;
  changeActiveColor: (colorVar: any) => void;
}

const SpiralOptions: React.FC<SpiralOptionsProps> = props => {
  const { setShowNumbers } = props;
  const { setShowSquares } = props;
  const { setShowEvens } = props;
  const { setDotSize } = props;
  const { activeColor } = props;

  const [toggleShowNumbers, setToggleShowNumbers] = useState(true);
  const [toggleShowSquares, setToggleShowSquares] = useState(false);
  const [toggleShowEvens, setToggleShowEvens] = useState(false);
  const [editDotSize, setEditDotSize] = useState(8);

  function updateShowNumbers() {
    setShowNumbers(!toggleShowNumbers);
    setToggleShowNumbers(!toggleShowNumbers);
  }

  function updateShowSquares() {
    setShowSquares(!toggleShowSquares);
    setToggleShowSquares(!toggleShowSquares);
  }

  function updateShowEvens() {
    setShowEvens(!toggleShowEvens);
    setToggleShowEvens(!toggleShowEvens);
  }

  function updateDotSize(button: number) {
    if (button === 1 && editDotSize > 0) {
      setDotSize(editDotSize - 1);
      setEditDotSize(editDotSize - 1);
    } else if (button === 2 && editDotSize < 11) {
      setDotSize(editDotSize + 1);
      setEditDotSize(editDotSize + 1);
    }
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
    <div className="w-full flex justify-center items-center text-gray-200">
      <div className="bg-black flex-row justify-center mt-32">
        <div className="flex">
          <div className="mr-4 font-medium">Show numbers</div>
          <ToggleDot toggleShow={toggleShowNumbers} activeColor={activeColor} onClickFunction={updateShowNumbers} />
        </div>
        <div className="flex mt-2">
          <div className="mr-4 font-medium">Highlight squares</div>
          <ToggleDot toggleShow={toggleShowSquares} activeColor={activeColor} onClickFunction={updateShowSquares} />
        </div>
        <div className="flex mt-2">
          <div className="mr-4 font-medium">Highlight evens</div>
          <ToggleDot toggleShow={toggleShowEvens} activeColor={activeColor} onClickFunction={updateShowEvens} />
        </div>
        <div className="flex-row w-1/2">
          <div className="mt-2 mb-2 ml-auto mr-auto font-medium">Change color</div>
          <div className="flex flex-wrap">
            {colorList &&
              colorList.map((color, index) => (
                <ColorBox color={color} activeColor={activeColor} changeActiveColor={props.changeActiveColor} />
              ))}
          </div>
        </div>
        <div className="flex-row mt-2 items-center">
          <div className="mb-2 font-medium">Change size</div>
          <div className="ml-2 flex font-medium text-base">
            <button
              className="mr-4 w-6 h-6 rounded focus:outline-none hover:p-2 active:h-8"
              style={{
                backgroundColor: activeColor
              }}
              onClick={() => updateDotSize(1)}
            >
              -
            </button>
            <button
              className="w-6 h-6 rounded focus:outline-none"
              style={{
                backgroundColor: activeColor
              }}
              onClick={() => updateDotSize(2)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiralOptions;
