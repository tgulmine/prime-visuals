import * as React from 'react';
import './SpiralDot.scss';

interface SpiralDotProps {
  number: number;
  xPos: number;
  yPos: number;
  isPrime: Boolean;
  showNumbers: Boolean;
  showSquares: Boolean;
  showEvens: Boolean;
  activeColor: string;
}

const SpiralDot: React.FC<SpiralDotProps> = props => {
  const { number } = props;
  const { xPos } = props;
  const { yPos } = props;
  const { isPrime } = props;
  const { showNumbers } = props;
  const { showSquares } = props;
  const { showEvens } = props;
  const { activeColor } = props;

  let boxSize = 16;

  function isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  function isEven(n: number) {
    return n > 0 && n % 2 === 0;
  }

  return (
    <div
      className="SpiralDot absolute flex justify-center items-center font-semibold text-gray-300"
      style={{
        height: boxSize,
        width: boxSize,
        top: window.screen.availHeight / 2 - boxSize / 2 - boxSize * yPos,
        left: window.screen.availWidth / 2 - boxSize / 2 + boxSize * xPos,
        backgroundColor: isPrime ? activeColor : showSquares && isSquare(number) ? '#000222' : showEvens && isEven(number) ? '#022444' : '',
        fontSize: 6
      }}
      title={number.toString()}
    >
      <div>{showNumbers ? number : null}</div>
    </div>
  );
};

export default SpiralDot;
