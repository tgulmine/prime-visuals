import * as React from 'react';

interface ColorBoxProps {
  color: string;
  changeActiveColor: (colorVar: any) => void;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  var color = props.color;

  return (
    <button
      className="rounded p-2 mr-2 mb-2 border-2 focus:outline-none focus:shadow-blackOutline"
      style={{
        borderColor: color
      }}
      onClick={() => props.changeActiveColor(color)}
    />
  );
};

export default ColorBox;
