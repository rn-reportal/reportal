import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  root__backgroundImage: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  root__contentWrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  root__tagline: {
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
    marginBottom: 25,
    color: theme.dark.colors.secondary,
  },
  root__greet: {
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
    marginBottom: 50,
    color: theme.dark.colors.text,
  },
});
