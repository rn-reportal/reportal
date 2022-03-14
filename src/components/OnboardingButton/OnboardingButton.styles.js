import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    width: 90,
    height: 90,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: theme.dark.colors.secondary,
    backgroundColor: theme.dark.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root__iconWrapper: {
    width: 65,
    height: 65,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.dark.colors.secondary,
  },
  root__icon: {
    fontSize: 30,
    color: theme.dark.colors.primary,
  },
});
