import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { useTheme } from '../../context/theme';

/* interface HomeContentProps {
  activeColor: string;
  secondaryColor: string;
} */

const HomeContent: React.FC = () => {
  const { theme } = useTheme()!;

  return (
    <div className="md:w-4/5 w-full p-6 md:pb-0 md:pr-0 flex flex-col lg:pt-48 lg:pl-32 md:pt-16 md:pl-20">
      <div className="flex flex-col lg:w-3/5 md:w-4/5">
        <div
          className="md:text-lg text-base font-semibold"
          style={{
            color: theme.mainColor
          }}
        >
          &nbsp;About
        </div>
        <div className="text-justify mt-1 text-sm">
          &nbsp;Prime numbers are integers that can only be divided by 1 and itself, going from 2, 3, 5 to infinity and
          beyond. To this day we have not managed to find a proper formula able to find any prime in existence, but when
          you look at the numbers from a new point of view, patterns start to emerge. This website was made with the
          purpose of finding different ways of visualizing and understanding prime numbers.
        </div>
      </div>
      <div className="flex lg:flex-row flex-col md:w-4/5 w-full lg:mt-20 md:mt-10 mt-6 items-start md:mb-6">
        <div className="lg:w-1/2 md:w-full flex flex-wrap lg:mr-10">
          <Link to="/ulamspiral">
            <div
              className="md:text-lg text-base font-semibold"
              style={{
                color: theme.mainColor
              }}
            >
              &nbsp;Ulam Spiral
            </div>
          </Link>
          <div className="text-justify mt-1 text-sm">
            &nbsp;It was created by Stanislaw Ulam in 1963, it’s constructed by writing the positive integers on a
            square grid in a spiral arrangement, then marking the primes. For performance reasons the maximum number of
            primes are limited for this and for the Parallax Compression.
          </div>
          <a
            href="https://en.wikipedia.org/wiki/Ulam_spiral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline pl-1 mt-1 text-sm"
            style={{
              color: theme.secondaryColor
            }}
          >
            More info
          </a>
        </div>
        <div className="lg:w-1/2 md:w-full flex flex-wrap lg:mt-0 md:mt-10 mt-6">
          <Link to="/parallaxcompression">
            <div
              className="md:text-lg text-base font-semibold"
              style={{
                color: theme.mainColor
              }}
            >
              &nbsp;Parallax Compression
            </div>
          </Link>
          <div className="text-justify mt-1 text-sm">
            &nbsp;It’s an algorithm invented by Shaun Gilchrist in 2018, inspired by the Ulam Spiral. It’s constructed
            by setting a density value and a number of rows. Each row will have one dot more than the previous one, and
            each dot will have the density amount of numbers interspersed based on the row number, then the dots with
            primes are marked.
          </div>
          <a
            href="http://www.novaspivack.com/science/we-have-discovered-a-new-pattern-in-the-prime-numbers-parallax-compression"
            target="_blank"
            rel="noopener noreferrer"
            className="underline pl-1 mt-1 text-sm"
            style={{
              color: theme.secondaryColor
            }}
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
