import * as React from 'react';
import './SpiralDot.scss';

interface SpiralDotProps {
  number: number;
  topX: number;
  rightX: number;
}

const SpiralDot: React.FC<SpiralDotProps> = props => {
  var number = props.number;
  var topX = props.topX;
  var rightX = props.rightX;
  var boxSize = 20;

  return (
    <div
      className="SpiralDot bg-red-500 absolute flex justify-center items-center font-semibold"
      style={{
        height: boxSize,
        width: boxSize,
        top: window.screen.availHeight / 2 - boxSize / 2 - boxSize * topX,
        left: window.screen.availWidth / 2 - boxSize / 2 + boxSize * rightX
      }}
    >
      <div>{number}</div>
    </div>
  );
};

export default SpiralDot;
