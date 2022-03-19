import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    paddingHorizontal: 25,
  },
  root__category: {
    color: theme.dark.colors.inactive,
    marginRight: 15,
    paddingVertical: 15,
    textTransform: 'capitalize',
    opacity: 0.5,
    ...typography.text,
  },
  'root__category--active': {
    fontFamily: 'Poppins-ExtraBold',
    opacity: 1,
  },
});
