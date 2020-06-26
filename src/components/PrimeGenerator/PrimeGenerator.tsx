import * as React from 'react';

const PrimeGenerator: React.FC = () => {
  let i = 2,
    j,
    primes: number[] = [],
    max = 5000; //vscode max json config to 5k

  while (primes.length < max) {
    if (i === 2) {
      primes.push(i);
    } else {
      for (j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0 || i === primes[j]) {
          break;
        }
        if (j === primes.length - 1) {
          primes.push(i);
        }
      }
    }
    i++;
  }

  console.log(primes);

  return <div className=""></div>;
};

export default PrimeGenerator;
