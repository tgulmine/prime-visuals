import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import './PyramidOptions.scss';
import { ColorBox } from '../ColorBox';
import { ToggleDot } from '../ToggleDot';
import { colorList } from '../../utils/colorList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faMinus, faCalculator } from '@fortawesome/free-solid-svg-icons';

interface PyramidOptionsProps {
  setShowNumbers: Dispatch<SetStateAction<boolean>>;
  setInverseColors: Dispatch<SetStateAction<boolean>>;
  setTransparency: Dispatch<SetStateAction<boolean>>;
  setDotSize: Dispatch<SetStateAction<number>>;
  setRows: Dispatch<SetStateAction<number>>;
  setDensity: Dispatch<SetStateAction<number>>;
  startDotSize: number;
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  setSecondaryColor: Dispatch<SetStateAction<string>>;
}

const PyramidOptions: React.FC<PyramidOptionsProps> = props => {
  const { setShowNumbers } = props;
  const { setInverseColors } = props;
  const { setTransparency } = props;
  const { setDotSize } = props;
  const { setRows } = props;
  const { setDensity } = props;
  const { startDotSize } = props;
  const { activeColor } = props;
  const { setActiveColor } = props;
  const { setSecondaryColor } = props;

  const [toggleShowNumbers, setToggleShowNumbers] = useState(false);
  const [toggleInverseColors, setToggleInverseColors] = useState(false);
  const [toggleTransparency, setToggleTransparency] = useState(false);
  const [editDotSize, setEditDotSize] = useState(startDotSize);
  const [newRows, setNewRows] = useState(20);
  const [newDensity, setNewDensity] = useState(30);

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

  function updateRows() {
    if (newRows > 100) {
      setNewRows(100);
      setRows(100);
    } else if (newRows > 0) {
      setNewRows(newRows);
      setRows(newRows);
    }
    console.log('rows', newRows);
  }

  function updateDensity() {
    if (newDensity > 100) {
      setNewDensity(100);
      setDensity(100);
    } else if (newDensity > 0) {
      setNewDensity(newDensity);
      setDensity(newDensity);
    }
    console.log('density', newDensity);
  }

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
                <ColorBox color={color} activeColor={activeColor} setActiveColor={setActiveColor} />
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
          <div className="mb-2 font-medium">Rows</div>
          <div className="flex items-center PyramidOptions-removeSpinners hover:PyramidOptions-removeSpinners active:PyramidOptions-removeSpinners">
            <input
              className="shadow border rounded w-5/18 py-2 px-2 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-blackOutline"
              id="inputNewRows"
              value={newRows}
              onChange={e => {
                setNewRows(e.target.valueAsNumber);
              }}
              type="number"
              placeholder="Rows"
            />
            <button
              className="ml-2 py-1 px-2 rounded focus:outline-none"
              style={{
                color: activeColor
              }}
              onClick={() => updateRows()}
            >
              <FontAwesomeIcon icon={faCalculator} />
            </button>
          </div>
        </div>
        <div className="flex-row mt-2 items-center">
          <div className="mb-2 font-medium">Density</div>
          <div className="flex items-center PyramidOptions-removeSpinners hover:PyramidOptions-removeSpinners active:PyramidOptions-removeSpinners">
            <input
              className="shadow border rounded w-5/18 py-2 px-2 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-blackOutline"
              id="inputNewDensity"
              value={newDensity}
              onChange={e => {
                setNewDensity(e.target.valueAsNumber);
              }}
              type="number"
              placeholder="Density"
            />
            <button
              className="ml-2 py-1 px-2 rounded focus:outline-none"
              style={{
                color: activeColor
              }}
              onClick={() => updateDensity()}
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
