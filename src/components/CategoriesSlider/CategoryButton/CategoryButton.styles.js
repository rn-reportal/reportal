import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    minWidth: '100%',
    alignItems: 'center',
    marginVertical: 30,
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
