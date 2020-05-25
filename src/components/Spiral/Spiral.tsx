import * as React from 'react';
import SpiralDot from '../SpiralDot/SpiralDot';

const Spiral: React.FC = () => {
  const min = 1;
  const max = 1000;

  let numberList: any[] = [];

  for (var i = min; i <= max; i++) {
    numberList[i - 1] = i;
  }

  return <div>{numberList && numberList.map((n, index) => <SpiralDot number={numberList[index]} topX={0} rightX={0} />)}</div>;
};

export default Spiral;
