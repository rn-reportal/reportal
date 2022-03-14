import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      // @todo: add light theme palette
      primary: '#FEFEFC',
      secondary: '#1A222F',
      text: '#BBBBBB',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#1A222F',
      secondary: '#FEFEFC',
      text: '#BBBBBB',
    },
  },
};
