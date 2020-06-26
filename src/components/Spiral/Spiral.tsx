import React, { useState, SetStateAction, Dispatch } from 'react';
import SpiralDot from '../SpiralDot/SpiralDot';
import SpiralOptions from '../SpiralOptions/SpiralOptions';
import primeList from '../../prime-list-big.json';

interface SpiralProps {
  min: number;
  max: number;
  startDotSize: number;
  activeColor: string;
  changeActiveColor: (colorVar: any) => void;
  setMaxNumber: Dispatch<SetStateAction<number>>;
}

const Spiral: React.FC<SpiralProps> = props => {
  const { min } = props;
  const { max } = props;
  const { startDotSize } = props;
  const { activeColor } = props;
  const { setMaxNumber } = props;

  const [showNumbers, setShowNumbers] = useState(true);
  const [showSquares, setShowSquares] = useState(false);
  const [showEvens, setShowEvens] = useState(false);
  const [dotSize, setDotSize] = useState(startDotSize);

  let posX = 0,
    posY = 0,
    countIncrement = 1, //dir cima 1 esq baixo -2 dir cima 3 esq baixo -4 mas so positivo
    countToCounter = 0, //conta até o counter ai muda direção e reseta
    countPosNeg = 0, //conta até direção mudar 2x ai muda pos/neg
    currentPrimeCheck = 0;

  let isGoingX = true,
    isPositive = true;

  let numberList: any[] = [],
    isPrimeList: any[] = [],
    posXList: any[] = [],
    posYList: any[] = [];

  for (let i = min; i <= max; i++) {
    if (i !== min) {
      if (isGoingX) {
        countToCounter++;
        if (isPositive) posX++;
        else posX--;
        if (countToCounter === countIncrement) {
          isGoingX = !isGoingX;
          countPosNeg++;
          countToCounter = 0;
          if (countPosNeg === 2) {
            isPositive = !isPositive;
            countIncrement++;
            countPosNeg = 0;
          }
        }
      } else {
        countToCounter++;
        if (isPositive) posY++;
        else posY--;
        if (countToCounter === countIncrement) {
          isGoingX = !isGoingX;
          countPosNeg++;
          countToCounter = 0;
          if (countPosNeg === 2) {
            isPositive = !isPositive;
            countIncrement++;
            countPosNeg = 0;
          }
        }
      }
    }

    numberList[i - 1] = i;
    posXList[i - 1] = posX;
    posYList[i - 1] = posY;

    if (primeList[currentPrimeCheck] === i) {
      isPrimeList[i - 1] = true;
      currentPrimeCheck++;
    } else {
      isPrimeList[i - 1] = false;
    }
  }

  return (
    <div className="w-1/4 overflow-auto">
      {numberList &&
        numberList.map((n, index) => (
          <SpiralDot
            number={numberList[index]}
            xPos={posXList[index]}
            yPos={posYList[index]}
            isPrime={isPrimeList[index]}
            showNumbers={showNumbers}
            showSquares={showSquares}
            showEvens={showEvens}
            dotSize={dotSize}
            activeColor={activeColor}
          />
        ))}
      <div className="">
        <SpiralOptions
          setShowNumbers={setShowNumbers}
          setShowSquares={setShowSquares}
          setShowEvens={setShowEvens}
          setDotSize={setDotSize}
          setMaxNumber={setMaxNumber}
          startDotSize={startDotSize}
          activeColor={activeColor}
          changeActiveColor={props.changeActiveColor}
        />
      </div>
    </div>
  );
};

export default Spiral;
