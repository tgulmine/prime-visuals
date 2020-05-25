import * as React from 'react';
import './SpiralDot.scss';

interface SpiralDotProps {
  number: Number;
}

const SpiralDot: React.FC<SpiralDotProps> = props => {
  var number = props.number;

  return (
    <div className="SpiralDot bg-red-500 absolute flex justify-center items-center font-semibold">
      <div>{number}</div>
    </div>
  );
};

export default SpiralDot;
