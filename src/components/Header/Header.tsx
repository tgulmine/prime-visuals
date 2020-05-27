import * as React from 'react';

/* interface HeaderProps {
  min: number;
  max: number;
} */

const Header: React.FC = () => {
  return (
    <div className="">
      <div
        className="px-4 py-2 ml-8 mt-6 border-red-700 border-8 w-auto font-bold text-4xl text-red-700"
        style={{
          borderColor: '#EC0F47',
          color: '#EC0F47'
        }}
      >
        Prime Visuals
      </div>
    </div>
  );
};

export default Header;
