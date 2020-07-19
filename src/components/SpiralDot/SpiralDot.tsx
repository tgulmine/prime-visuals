import * as React from 'react';
import './SpiralDot.scss';
import { useTheme } from '../../context/theme';

interface SpiralDotProps {
  number: number;
  xPos: number;
  yPos: number;
  isPrime: Boolean;
  showNumbers: Boolean;
  showSquares: Boolean;
  dotSize: number;
}

const SpiralDot: React.FC<SpiralDotProps> = props => {
  const { number } = props;
  const { xPos } = props;
  const { yPos } = props;
  const { isPrime } = props;
  const { showNumbers } = props;
  const { showSquares } = props;
  const { dotSize } = props;

  const { theme } = useTheme()!;

  //7 sizes 0-6
  const boxSize = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
  const fontSize = [0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 8, 9];

  function isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  return (
    <div
      className="SpiralDot absolute flex justify-center items-center font-semibold text-gray-300 cursor-default"
      style={{
        height: boxSize[dotSize],
        width: boxSize[dotSize],
        top: window.screen.availHeight / 2 - boxSize[dotSize] / 2 - boxSize[dotSize] * yPos,
        left: window.screen.availWidth / 2 - boxSize[dotSize] / 2 + boxSize[dotSize] * xPos,
        backgroundColor: isPrime ? theme.mainColor : showSquares && isSquare(number) ? theme.secondaryColor : '',
        fontSize: fontSize[dotSize]
      }}
      title={number.toString()}
    >
      <div>{showNumbers ? number : null}</div>
    </div>
  );
};

export default SpiralDot;
