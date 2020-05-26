import * as React from 'react';
import SpiralDot from '../SpiralDot/SpiralDot';

const Spiral: React.FC = () => {
  const min = 1;
  const max = 1000;

  //dir cima 1 esq baixo -2 dir cima 3 esq baixo -4

  var posX = 0;
  var posY = 0;
  var isGoingX = true;
  var isPositive = true;
  var countIncrement = 1; //dir cima 1 esq baixo -2 dir cima 3 esq baixo -4 mas so positivo
  var countToCounter = 0; //conta até o counter ai muda direção e reseta
  var countPosNeg = 0; //conta até direção mudar 2x ai muda pos/neg

  let numberList: any[] = [];
  let posXList: any[] = [];
  let posYList: any[] = [];

  for (var i = min; i <= max; i++) {
    if (i !== min) {
      if (isGoingX) {
        countToCounter++;
        if (isPositive) posX++;
        else posX--;
        if (countToCounter === countIncrement) {
          isGoingX = !isGoingX;
          countPosNeg++;
          countToCounter = 0;
          if (countPosNeg === 2) {
            isPositive = !isPositive;
            countIncrement++;
            countPosNeg = 0;
          }
        }
      } else {
        countToCounter++;
        if (isPositive) posY++;
        else posY--;
        if (countToCounter === countIncrement) {
          isGoingX = !isGoingX;
          countPosNeg++;
          countToCounter = 0;
          if (countPosNeg === 2) {
            isPositive = !isPositive;
            countIncrement++;
            countPosNeg = 0;
          }
        }
      }
    }
    console.log(
      i +
        ' goingX ' +
        isGoingX +
        ' countIncrement ' +
        countIncrement +
        ' countToCounter ' +
        countToCounter +
        ' countPosNeg ' +
        countPosNeg +
        ' isPositive ' +
        isPositive +
        ' posX ' +
        posX +
        ' posY ' +
        posY
    );

    numberList[i - 1] = i;
    posXList[i - 1] = posX;
    posYList[i - 1] = posY;
  }

  return (
    <div>
      {numberList && numberList.map((n, index) => <SpiralDot number={numberList[index]} topX={posYList[index]} rightX={posXList[index]} />)}
    </div>
  );
};

export default Spiral;
