import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom';

interface HomeContentProps {
  activeColor: string;
}

const HomeContent: React.FC<HomeContentProps> = props => {
  const { activeColor } = props;

  return (
    <div className="w-4/5 flex flex-col pt-48 pl-32">
      <div className="flex flex-col w-3/5">
        <div
          className="text-lg font-semibold"
          style={{
            color: activeColor
          }}
        >
          &nbsp;About
        </div>
        <div className="text-justify mt-1">
          &nbsp;Prime numbers are integers that can only be divided by 1 and itself, going from 2, 3, 5 to infinity and
          beyond. To this day we have not managed to find a proper formula able to find any prime in existence, but when
          you look at the numbers from a new point of view, patterns start to emerge. This website was made with the
          purpose of finding different ways of visualizing and understanding prime numbers.
        </div>
      </div>
      <div className="flex w-4/5 mt-20 items-start">
        <div className="w-1/2 flex flex-wrap mr-10">
          <Link to="/ulamspiral">
            <div
              className="text-lg font-semibold"
              style={{
                color: activeColor
              }}
            >
              &nbsp;Ulam Spiral
            </div>
          </Link>
          <div className="text-justify mt-1">
            &nbsp;It was created by Stanislaw Ulam in 1963, it’s constructed by writing the positive integers on a
            square grid in a spiral arrangement, then marking the primes. For performance reasons the maximum number of
            primes are limited for this and for the Parallax Compression.
          </div>
          <a
            href="https://en.wikipedia.org/wiki/Ulam_spiral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline pl-1"
          >
            More info
          </a>
        </div>
        <div className="w-1/2 flex flex-wrap ">
          <Link to="/parallaxcompression">
            <div
              className="text-lg font-semibold"
              style={{
                color: activeColor
              }}
            >
              &nbsp;Parallax Compression
            </div>
          </Link>
          <div className="text-justify mt-1">
            &nbsp;It’s an algorithm invented by Shaun Gilchrist in 2018, inspired by the Ulam Spiral. It’s constructed
            by setting a density value and a number of rows. Each row will have one dot more than the previous one, and
            each dot will have the density amount of numbers interspersed based on the row number, then the dots with
            primes are marked.
          </div>
          <a
            href="http://www.novaspivack.com/science/we-have-discovered-a-new-pattern-in-the-prime-numbers-parallax-compression"
            target="_blank"
            rel="noopener noreferrer"
            className="underline pl-1"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
