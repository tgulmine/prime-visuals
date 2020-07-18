import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom';

interface HeaderProps {
  activeColor: string;
  secondaryColor: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { activeColor } = props;
  const { secondaryColor } = props;

  return (
    <div
      className="flex md:flex-col md:w-1/5 flex-row w-full bg-black z-10 items-center md:items-start mb-4 md:mb-0"
      style={{
        height: '80px'
      }}
    >
      <Link to="/">
        <div
          className="md:px-4 md:py-2 md:ml-8 md:mt-6 border-red-700 md:border-8 font-light lg:text-4xl text-red-700 text-center
          md:text-2xl text-sm border-4 ml-4 mt-3 px-2 py-1"
          style={{
            borderColor: activeColor,
            color: activeColor
          }}
        >
          Prime Visuals
        </div>
      </Link>
      <div className="flex md:mt-10 md:flex-wrap ml-8 md:ml-0 justify-between">
        <Link to="/ulamspiral">
          <div
            className="md:px-4 md:py-2 md:mt-6 border-red-700 md:border-4 md:border-l-0 font-light lg:text-2xl text-red-700 text-center
            md:text-lg mt-3 text-xs border-2 px-2 py-1"
            style={{
              borderColor: secondaryColor,
              color: secondaryColor
            }}
          >
            Ulam Spiral
          </div>
        </Link>
        <Link to="/parallaxcompression">
          <div
            className="md:px-4 md:py-2 md:mt-6 border-red-700 md:border-4 md:border-l-0 font-light lg:text-2xl text-red-700 lg:text-center
            md:text-lg mt-3 text-xs border-2 px-2 py-1 break-normal ml-8 mr-4 md:mx-0 md:text-justify text-center"
            style={{
              borderColor: secondaryColor,
              color: secondaryColor
            }}
          >
            Parallax Compression
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
