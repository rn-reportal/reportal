import { theme, typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  root__icon: {
    fontSize: 18,
    color: theme.dark.colors.inactive,
    marginRight: 5,
  },
  root__metadata: {
    color: theme.dark.colors.inactive,
    ...typography.mediumText,
  },
});
