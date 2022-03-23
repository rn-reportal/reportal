import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 8,
    position: 'relative',
    borderRadius: 5,
  },
  root__category: {
    color: theme.dark.colors.inactive,
    textTransform: 'capitalize',
    ...typography.text,
  },
  root__activeBullet: {
    position: 'absolute',
    left: '50%',
    bottom: 4,
    borderRadius: 5,
    height: 5,
    width: 5,
  },
});
