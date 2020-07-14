import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
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
  cell: PyramidCell[];
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

  const [fullPyramid, setFullPyramid] = useState<PyramidRow[]>([]);

  let row = 0,
    cell = 0,
    counter = 0,
    storeLastMult = 0;

  useEffect(() => {
    generatePyramid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generatePyramid() {
    let pyramidStorage: PyramidRow[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        pyramidStorage[i].cell[j].primeCount = 0;
      }
    }
    for (row; row < rows; row++) {
      for (cell = 0; cell < row + 1; cell++) {
        let x = density * (row + storeLastMult) + cell + 1;
        for (let i = 0; i < density; i++) {
          /* console.log('x', x); */
          if (isPrime(x)) counter++;
          x += row + 1;
        }
        pyramidStorage[row].cell[cell].primeCount = counter;
        /* console.log('row', row, 'cell', cell, 'counter', counter); */
        counter = 0;
      }
      storeLastMult += row;
    }
    console.log(pyramidStorage);
    setFullPyramid(pyramidStorage);
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
      {console.log(fullPyramid)}
      {fullPyramid &&
        fullPyramid.map((r, indexR) =>
          r.cell.map((c, indexC) => (
            <PyramidDot
              primeCount={fullPyramid[indexR].cell[indexC].primeCount}
              row={indexR}
              cell={indexC}
              density={density}
              maxRows={rows}
              showNumbers={showNumbers}
              dotSize={dotSize}
              activeColor={activeColor}
            />
          ))
        )}
      <div className="flex justify-end">
        <PyramidOptions
          setShowNumbers={setShowNumbers}
          setShowSquares={setShowSquares}
          setShowEvens={setShowEvens}
          setDotSize={setDotSize}
          setRows={setRows}
          startDotSize={startDotSize}
          activeColor={activeColor}
          changeActiveColor={props.changeActiveColor}
          setSecondaryColor={props.setSecondaryColor}
        />
      </div>
    </div>
  );
};

export default Pyramid;
