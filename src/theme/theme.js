import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFF',
      secondary: '#1A222F',
      background: '#FFF',
      text: '#BFBFBF',
      inactive: '#EFEFEF',
      error: '#E83A14',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#1A222F',
      secondary: '#FFF',
      background: '#1A222F',
      text: '#BFBFBF',
      inactive: '#EFEFEF',
      error: '#E83A14',
    },
  },
};
