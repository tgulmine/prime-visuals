import * as React from 'react';
import './PyramidDot.scss';

interface PyramidDotProps {
  primeCount: number;
  row: number;
  cell: number;
  density: number;
  maxRows: number;
  showNumbers: Boolean;
  showInverseColors: Boolean;
  showTransparency: Boolean;
  dotSize: number;
  activeColor: string;
}

const PyramidDot: React.FC<PyramidDotProps> = props => {
  const { primeCount } = props;
  const { row } = props;
  const { cell } = props;
  const { density } = props;
  const { maxRows } = props;
  const { showNumbers } = props;
  const { showInverseColors } = props;
  const { showTransparency } = props;
  const { dotSize } = props;
  const { activeColor } = props;

  const primesPerDensity = primeCount / density;

  //7 sizes 0-6
  const boxSize = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
  const fontSize = [0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 8, 9];

  const yPos = row - maxRows / 2;
  const xPos = cell - (row + 1) / 2;

  function getBgColor() {
    let alphaColor;
    if (showTransparency) {
      if (showInverseColors)
        alphaColor = activeColor.replace('1)', (1 - primesPerDensity).toString());
      else alphaColor = activeColor.replace('1)', primesPerDensity.toString());
    } else {
      if (showInverseColors) alphaColor = primeCount > 0 ? '#000000' : activeColor;
      else alphaColor = primeCount > 0 ? activeColor : '#000000';
    }
    return alphaColor;
  }

  return (
    <div
      className="PyramidDot absolute flex justify-center items-center font-semibold text-gray-300 cursor-default"
      style={{
        height: boxSize[dotSize],
        width: boxSize[dotSize],
        top: window.screen.availHeight / 2 - boxSize[dotSize] / 2 + boxSize[dotSize] * yPos,
        left: window.screen.availWidth / 2 - boxSize[dotSize] / 2 + boxSize[dotSize] * xPos,
        backgroundColor: getBgColor(),
        fontSize: fontSize[dotSize]
      }}
      title={primeCount.toString()}
    >
      <div>{showNumbers ? primeCount : null}</div>
    </div>
  );
};

export default PyramidDot;
