import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

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
    textAlign: 'center',
    marginBottom: 25,
    ...typography.hero,
  },
  root__greet: {
    textAlign: 'center',
    marginBottom: 50,
  },
});
