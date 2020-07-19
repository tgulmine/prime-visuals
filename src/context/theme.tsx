import * as React from 'react';
import { colorList } from '../utils/colorList';

interface ITheme {
  mainColor: string;
  secondaryColor: string;
}

const defaultTheme = {
  mainColor: colorList[2],
  secondaryColor: colorList[10]
};

type ThemeContextType = {
  theme: ITheme;
  setTheme: (value: ITheme) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
