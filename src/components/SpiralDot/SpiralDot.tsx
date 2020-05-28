import * as React from 'react';
import './SpiralDot.scss';

interface SpiralDotProps {
  number: number;
  xPos: number;
  yPos: number;
  isPrime: Boolean;
  showNumbers: Boolean;
  activeColor: string;
}

const SpiralDot: React.FC<SpiralDotProps> = props => {
  const { number } = props;
  const { xPos } = props;
  const { yPos } = props;
  const { isPrime } = props;
  const { showNumbers } = props;
  const { activeColor } = props;

  let boxSize = 20;

  return (
    <div
      className="SpiralDot absolute flex justify-center items-center font-semibold text-gray-300"
      style={{
        height: boxSize,
        width: boxSize,
        top: window.screen.availHeight / 2 - boxSize / 2 - boxSize * yPos,
        left: window.screen.availWidth / 2 - boxSize / 2 + boxSize * xPos,
        backgroundColor: isPrime ? activeColor : ''
      }}
    >
      <div>{showNumbers ? number : null}</div>
    </div>
  );
};

export default SpiralDot;
