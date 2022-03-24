import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
  },
  root__keywordsLabel: {
    ...typography.text,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
  root__keywordsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    flexShrink: 1,
  },
  root__noKeywords: {
    ...typography.text,
  },
});
