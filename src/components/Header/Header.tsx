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
    <div className="flex flex-col w-1/5 bg-black z-10">
      <Link to="/">
        <div
          className="px-4 py-2 ml-8 mt-6 border-red-700 border-8 font-light text-4xl text-red-700 text-center"
          style={{
            borderColor: activeColor,
            color: activeColor
          }}
        >
          Prime Visuals
        </div>
      </Link>
      <div className="flex mt-10 flex-wrap">
        <Link to="/ulamspiral">
          <div
            className="px-4 py-2 mt-6 border-red-700 border-4 border-l-0 font-light text-2xl text-red-700 text-center"
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
            className="px-4 py-2 mt-6 border-red-700 border-4 border-l-0 font-light text-2xl text-red-700 text-center"
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
