import * as React from 'react';
import './SpiralDot.scss';

interface SpiralDotProps {
  number: number;
  xPos: number;
  yPos: number;
  isPrime: Boolean;
}

const SpiralDot: React.FC<SpiralDotProps> = props => {
  const { number } = props;
  const { xPos } = props;
  const { yPos } = props;
  const { isPrime } = props;

  let boxSize = 20;

  return (
    <div
      className="SpiralDot absolute flex justify-center items-center font-semibold"
      style={{
        height: boxSize,
        width: boxSize,
        top: window.screen.availHeight / 2 - boxSize / 2 - boxSize * yPos,
        left: window.screen.availWidth / 2 - boxSize / 2 + boxSize * xPos,
        backgroundColor: isPrime ? '#C70039' : '#FFFFFF'
      }}
    >
      <div>{number}</div>
    </div>
  );
};

export default SpiralDot;
