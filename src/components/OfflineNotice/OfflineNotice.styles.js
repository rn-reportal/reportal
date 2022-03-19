import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: theme.dark.colors.error,
    marginBottom: 15,
  },
  root__noConnectionMessage: {
    color: theme.dark.colors.secondary,
    ...typography.text,
  },
});
