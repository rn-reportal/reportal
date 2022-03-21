import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 25,
    width: '100%',
  },
  root__image: {
    borderRadius: 20,
  },
  root__dataWrapper: {
    paddingLeft: 20,
    flexShrink: 1,
  },
  root__title: {
    fontFamily: 'Poppins-Medium',
    flexWrap: 'wrap',
    ...typography.text,
  },
});
