import * as React from 'react';

interface HeaderProps {
  activeColor: string;
  secondaryColor: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { activeColor } = props;
  const { secondaryColor } = props;

  return (
    <div className="flex flex-col">
      <div
        className="px-4 py-2 ml-8 mt-6 border-red-700 border-8 w-auto font-light text-4xl text-red-700"
        style={{
          borderColor: activeColor,
          color: activeColor
        }}
      >
        Prime Visuals
      </div>
      <div className="flex flex-col w-2/3 mt-10">
        <div
          className="px-4 py-2 mt-6 border-red-700 border-4 border-l-0 w-auto font-light text-2xl text-red-700"
          style={{
            borderColor: secondaryColor,
            color: secondaryColor
          }}
        >
          Prime Spiral
        </div>
        <div
          className="px-4 py-2 mt-6 border-red-700 border-4 border-l-0 w-auto font-light text-2xl text-red-700"
          style={{
            borderColor: secondaryColor,
            color: secondaryColor
          }}
        >
          Prime Pyramid
        </div>
      </div>
    </div>
  );
};

export default Header;
