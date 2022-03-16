import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#EDF4FF',
      secondary: '#1A222F',
      background: '#EDF4FF',
      text: '#BFBFBF',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#1A222F',
      secondary: '#EDF4FF',
      background: '#1A222F',
      text: '#BFBFBF',
    },
  },
};
