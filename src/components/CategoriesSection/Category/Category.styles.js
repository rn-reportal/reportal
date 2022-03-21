import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 9,
    paddingVertical: 7,
    position: 'relative',
  },
  root__category: {
    color: theme.dark.colors.secondary,
    textTransform: 'capitalize',
    ...typography.text,
  },
  'root__category--active': {
    fontFamily: 'Poppins-Bold',
  },
  root__activeBullet: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -2.5 }],
    bottom: 0,
    borderRadius: 5,
    height: 5,
    width: 5,
  },
});
