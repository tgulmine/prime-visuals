import React, { Dispatch, SetStateAction } from 'react';

interface ColorBoxProps {
  color: string;
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  var color = props.color;
  var activeColor = props.activeColor;

  return (
    <button
      className="rounded p-2 mr-2 mb-2 border-2 focus:outline-none focus:shadow-blackOutline"
      style={{
        borderColor: color,
        backgroundColor: color === activeColor ? color : undefined
      }}
      onClick={() => props.setActiveColor(color)}
    />
  );
};

export default ColorBox;
