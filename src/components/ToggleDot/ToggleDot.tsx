import * as React from 'react';
import './ToggleDot.scss';
import { useTheme } from '../../context/theme';

interface ToggleDotProps {
  toggleShow: Boolean;
  onClickFunction: () => void;
}

const ToggleDot: React.FC<ToggleDotProps> = props => {
  const { toggleShow } = props;
  const { onClickFunction } = props;

  const { theme } = useTheme()!;

  return (
    <button className="flex items-center focus:outline-none" type="button" onClick={() => onClickFunction()}>
      <div
        className="border-blue-300 border-2 w-12 h-4 rounded-full"
        style={{
          borderColor: theme.mainColor
        }}
      />
      <div
        className={
          toggleShow
            ? 'ToggleDot-On bg-blue-300 w-6 h-6 rounded-full absolute'
            : 'ToggleDot-Off bg-blue-300 w-6 h-6 rounded-full absolute'
        }
        style={{
          backgroundColor: theme.mainColor
        }}
      />
    </button>
  );
};

export default ToggleDot;
