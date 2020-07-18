import * as React from 'react';
import './ToggleDot.scss';

interface ToggleDotProps {
  toggleShow: Boolean;
  activeColor: string;
  onClickFunction: () => void;
}

const ToggleDot: React.FC<ToggleDotProps> = props => {
  const { toggleShow } = props;
  const { activeColor } = props;
  const { onClickFunction } = props;

  return (
    <button className="flex items-center focus:outline-none" type="button" onClick={() => onClickFunction()}>
      <div
        className="border-blue-300 border-2 w-12 h-4 rounded-full"
        style={{
          borderColor: activeColor
        }}
      />
      <div
        className={
          toggleShow
            ? 'ToggleDot-On bg-blue-300 w-6 h-6 rounded-full absolute'
            : 'ToggleDot-Off bg-blue-300 w-6 h-6 rounded-full absolute'
        }
        style={{
          backgroundColor: activeColor
        }}
      />
    </button>
  );
};

export default ToggleDot;
