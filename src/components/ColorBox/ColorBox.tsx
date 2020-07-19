import React from 'react';
import { useTheme } from '../../context/theme';

interface ColorBoxProps {
  color: string;
  setMainColor: (mainColor: string) => void;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  var color = props.color;

  const { theme } = useTheme()!;

  return (
    <button
      className="rounded p-2 mr-2 mb-2 border-2 focus:outline-none focus:shadow-blackOutline"
      style={{
        borderColor: color,
        backgroundColor: color === theme.mainColor ? color : undefined
      }}
      onClick={() => props.setMainColor(color)}
    />
  );
};

export default ColorBox;
