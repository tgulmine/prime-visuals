import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import './PyramidOptions.scss';
import ColorBox from '../ColorBox/ColorBox';
import ToggleDot from '../ToggleDot/ToggleDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faMinus, faCalculator } from '@fortawesome/free-solid-svg-icons';

interface PyramidOptionsProps {
  setShowNumbers: Dispatch<SetStateAction<boolean>>;
  setInverseColors: Dispatch<SetStateAction<boolean>>;
  setTransparency: Dispatch<SetStateAction<boolean>>;
  setDotSize: Dispatch<SetStateAction<number>>;
  setRows: Dispatch<SetStateAction<number>>;
  startDotSize: number;
  activeColor: string;
  changeActiveColor: (colorVar: any) => void;
  setSecondaryColor: Dispatch<SetStateAction<string>>;
}

const PyramidOptions: React.FC<PyramidOptionsProps> = props => {
  const { setShowNumbers } = props;
  const { setInverseColors } = props;
  const { setTransparency } = props;
  const { setDotSize } = props;
  const { setRows } = props;
  const { startDotSize } = props;
  const { activeColor } = props;
  const { setSecondaryColor } = props;

  const [toggleShowNumbers, setToggleShowNumbers] = useState(false);
  const [toggleInverseColors, setToggleInverseColors] = useState(false);
  const [toggleTransparency, setToggleTransparency] = useState(false);
  const [editDotSize, setEditDotSize] = useState(startDotSize);
  const [newMaxNumber, setNewMaxNumber] = useState(1000);

  const [isHidden, setIsHidden] = useState(false);

  const optionsWidth = 300;
  const buttonWidth = 50;

  useEffect(() => {
    setSecondaryColor(updateColor('even'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColor]);

  function updateColor(color: string) {
    let k = 0;
    for (let i = 0; i < colorList.length; i++) {
      if (activeColor === colorList[i]) {
        k = i;
        break;
      }
    }
    if (color === 'square') {
      k += 4;
      if (k >= colorList.length) k -= colorList.length;
    } else {
      k -= 4;
      if (k < 0) k += colorList.length;
    }
    return colorList[k];
  }

  function updateShowNumbers() {
    setShowNumbers(!toggleShowNumbers);
    setToggleShowNumbers(!toggleShowNumbers);
  }

  function updateInverseColors() {
    setInverseColors(!toggleInverseColors);
    setToggleInverseColors(!toggleInverseColors);
  }

  function updateTransparency() {
    setTransparency(!toggleTransparency);
    setToggleTransparency(!toggleTransparency);
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

  function updateMaxNumber() {
    /* console.log('a');
    var maxNumberElem: HTMLInputElement = document.getElementById('inputMaxNumber') as HTMLInputElement;
    var maxNumberValue: any = maxNumberElem.value;
    if (maxNumberValue > 48611) {
      setNewMaxNumber(48611);
      setMaxNumber(48611);
    } else if (maxNumberValue > 0) {
      setNewMaxNumber(maxNumberValue);
      setMaxNumber(maxNumberValue);
    } */
  }

  const colorList = [
    'rgba(251, 191, 84, 1)',
    'rgba(238, 107, 59, 1)',
    'rgba(236, 15, 71, 1)',
    'rgba(160, 44, 93, 1)',
    'rgba(112, 4, 96, 1)',
    'rgba(2, 44, 122, 1)',
    'rgba(171, 217, 109, 1)',
    'rgba(21, 194, 134, 1)',
    'rgba(8, 115, 83, 1)',
    'rgba(4, 84, 89, 1)',
    'rgba(38, 41, 73, 1)',
    'rgba(26, 19, 51, 1)'
  ];

  return (
    <div
      className="flex justify-center items-center text-gray-200 overflow-hidden z-10"
      style={{
        width: optionsWidth
      }}
    >
      <button
        className={
          isHidden
            ? 'PyramidOptions-buttonOn h-screen w-10 focus:outline-none'
            : 'PyramidOptions-buttonOff w-10 h-screen focus:outline-none'
        }
        style={{
          width: buttonWidth
        }}
        onClick={() => setIsHidden(!isHidden)}
      >
        {isHidden ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
      </button>
      <div
        className={
          isHidden
            ? 'PyramidOptions-hide bg-black h-screen flex-row justify-center pl-4 pt-40 overflow-hidden'
            : 'PyramidOptions-show bg-black h-screen flex-row justify-center pl-4 pt-40 overflow-hidden'
        }
        style={{
          width: optionsWidth - buttonWidth
        }}
      >
        <div className="flex">
          <div className="mr-4 font-medium">Show prime count</div>
          <ToggleDot toggleShow={toggleShowNumbers} activeColor={activeColor} onClickFunction={updateShowNumbers} />
        </div>
        <div className="flex mt-2">
          <div className="mr-4 font-medium">Inverse colors</div>
          <ToggleDot toggleShow={toggleInverseColors} activeColor={activeColor} onClickFunction={updateInverseColors} />
        </div>
        <div className="flex mt-2">
          <div className="mr-4 font-medium">Transparency</div>
          <ToggleDot toggleShow={toggleTransparency} activeColor={activeColor} onClickFunction={updateTransparency} />
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
              className="mr-4 w-6 h-6 rounded focus:outline-none"
              style={{
                color: activeColor
              }}
              onClick={() => updateDotSize(1)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
              className="w-6 h-6 rounded focus:outline-none"
              style={{
                color: activeColor
              }}
              onClick={() => updateDotSize(2)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="flex-row mt-2 items-center">
          <div className="mb-2 font-medium">Max number</div>
          <div className="flex items-center PyramidOptions-removeSpinners hover:PyramidOptions-removeSpinners active:PyramidOptions-removeSpinners">
            <input
              className="shadow border rounded w-5/18 py-2 px-2 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-blackOutline"
              id="inputMaxNumber"
              type="number"
              placeholder={newMaxNumber.toString()}
            />
            <button
              className="ml-2 py-1 px-2 rounded focus:outline-none"
              style={{
                color: activeColor
              }}
              onClick={() => updateMaxNumber()}
            >
              <FontAwesomeIcon icon={faCalculator} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyramidOptions;
