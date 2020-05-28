import * as React from 'react';

interface ColorBoxProps {
  color: string;
  changeActiveColor: (colorVar: any) => void;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  var color = props.color;

  return (
    <button
      className="rounded p-3 bg-gray-800 mr-2 mb-2 border-white border-1 focus:outline-none focus:shadow-blackOutline"
      style={{
        backgroundColor: color
      }}
      onClick={() => props.changeActiveColor(color)}
    />
  );
};

export default ColorBox;
