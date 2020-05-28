import * as React from 'react';

interface HeaderProps {
  activeColor: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { activeColor } = props;

  return (
    <div className="">
      <div
        className="px-4 py-2 ml-8 mt-6 border-red-700 border-8 w-auto font-bold text-4xl text-red-700"
        style={{
          borderColor: activeColor,
          color: activeColor
        }}
      >
        Prime Visuals
      </div>
    </div>
  );
};

export default Header;
