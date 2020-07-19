import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { PyramidDot } from '../PyramidDot';
import { PyramidOptions } from '../PyramidOptions';
import primeList from '../../prime-list-big.json';

interface PyramidProps {
  rows: number;
  density: number;
  startDotSize: number;
  setRows: Dispatch<SetStateAction<number>>;
  setDensity: Dispatch<SetStateAction<number>>;
}

interface PyramidRow {
  cell: number[];
}

const Pyramid: React.FC<PyramidProps> = props => {
  const { rows } = props;
  const { density } = props;
  const { startDotSize } = props;
  const { setRows } = props;
  const { setDensity } = props;

  const [showNumbers, setShowNumbers] = useState(false);
  const [showInverseColors, setInverseColors] = useState(false);
  const [showTransparency, setTransparency] = useState(false);
  const [dotSize, setDotSize] = useState(startDotSize);

  const [fullPyramid, setFullPyramid] = useState<PyramidRow[]>([]);

  let row = 0,
    cell = 0,
    counter = 0,
    storeLastMult = 0;

  useEffect(() => {
    generatePyramid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, density]);

  function generatePyramid() {
    const pyramidStorage: PyramidRow[] = [];
    let pyramidRow: PyramidRow = { cell: [] };

    for (row; row < rows; row++) {
      pyramidRow = emptyPyramidRow();
      for (cell = 0; cell < row + 1; cell++) {
        let x = density * (row + storeLastMult) + cell + 1;
        for (let i = 0; i < density; i++) {
          if (isPrime(x)) counter++;
          x += row + 1;
        }
        pyramidRow.cell.push(counter);
        counter = 0;
      }
      pyramidStorage.push(pyramidRow);
      storeLastMult += row;
    }
    setFullPyramid(pyramidStorage);
  }

  function emptyPyramidRow() {
    return { cell: [] };
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
      {fullPyramid &&
        fullPyramid.map((r, indexR) =>
          r.cell.map((c, indexC) => (
            <PyramidDot
              key={indexC * 50000 + indexR}
              primeCount={fullPyramid[indexR].cell[indexC]}
              row={indexR}
              cell={indexC}
              density={density}
              maxRows={rows}
              showNumbers={showNumbers}
              showInverseColors={showInverseColors}
              showTransparency={showTransparency}
              dotSize={dotSize}
            />
          ))
        )}
      <div className="flex justify-end">
        <PyramidOptions
          setShowNumbers={setShowNumbers}
          setInverseColors={setInverseColors}
          setTransparency={setTransparency}
          setDotSize={setDotSize}
          setRows={setRows}
          setDensity={setDensity}
          startDotSize={startDotSize}
        />
      </div>
    </div>
  );
};

export default Pyramid;
