import React, { useState, SetStateAction, Dispatch } from 'react';
import PyramidDot from '../PyramidDot/PyramidDot';
import PyramidOptions from '../PyramidOptions/PyramidOptions';
import primeList from '../../prime-list-big.json';

interface PyramidProps {
  rows: number;
  density: number;
  startDotSize: number;
  activeColor: string;
  changeActiveColor: (colorVar: any) => void;
  setSecondaryColor: Dispatch<SetStateAction<string>>;
  setRows: Dispatch<SetStateAction<number>>;
}

interface PyramidRow {
  row: PyramidCell[];
}

interface PyramidCell {
  primeCount: number;
}

const Pyramid: React.FC<PyramidProps> = props => {
  const { rows } = props;
  const { density } = props;
  const { startDotSize } = props;
  const { activeColor } = props;
  const { setRows } = props;

  const [showNumbers, setShowNumbers] = useState(true);
  const [showSquares, setShowSquares] = useState(false);
  const [showEvens, setShowEvens] = useState(false);
  const [dotSize, setDotSize] = useState(startDotSize);

  const [squareColor, setSquareColor] = useState('');
  const [evenColor, setEvenColor] = useState('');

  let row = 0,
    cell = 0,
    counter = 0,
    storeLastMult = 0;

  let numberList: any[] = [],
    isPrimeList: any[] = [],
    posXList: any[] = [],
    posYList: any[] = [];

  const pyramidStorage: PyramidRow[] = [];

  for (row; row < rows; row++) {
    for (cell = 0; cell < row + 1; cell++) {
      let x = density * (row + storeLastMult) + cell + 1;
      for (let i = 0; i < density; i++) {
        console.log('x', x);
        if (isPrime(x)) counter++;
        x += row + 1;
      }
      if (pyramidStorage[row]) pyramidStorage[row].row[cell].primeCount = counter;
      console.log('row', row, 'cell', cell, 'counter', counter);
      counter = 0;
    }
    storeLastMult += row;
  }

  function isPrime(x: number) {
    if (x === 2) return true;
    else {
      for (let i = 0; i < primeList.length; i++) {
        if (x === primeList[i]) return true;
        else if (x < primeList[i]) return false;
      }
    }
  }

  return (
    <div className="overflow-auto">
      {numberList &&
        numberList.map((n, index) => (
          <PyramidDot
            number={numberList[index]}
            xPos={posXList[index]}
            yPos={posYList[index]}
            isPrime={isPrimeList[index]}
            showNumbers={showNumbers}
            showSquares={showSquares}
            showEvens={showEvens}
            dotSize={dotSize}
            activeColor={activeColor}
            squareColor={squareColor}
            evenColor={evenColor}
          />
        ))}
      <div className="flex justify-end">
        <PyramidOptions
          setShowNumbers={setShowNumbers}
          setShowSquares={setShowSquares}
          setShowEvens={setShowEvens}
          setDotSize={setDotSize}
          setRows={setRows}
          startDotSize={startDotSize}
          activeColor={activeColor}
          setSquareColor={setSquareColor}
          setEvenColor={setEvenColor}
          changeActiveColor={props.changeActiveColor}
          setSecondaryColor={props.setSecondaryColor}
        />
      </div>
    </div>
  );
};

export default Pyramid;
