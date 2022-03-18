import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  root__icon: {
    fontSize: 22,
    color: theme.dark.colors.secondary,
  },
  'root__icon--active': {
    color: theme.dark.colors.secondary,
  },
});
