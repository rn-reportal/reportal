import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  root__image: {
    borderRadius: 20,
    borderWidth: 0.25,
    borderColor: theme.dark.colors.inactive,
  },
  root__dataWrapper: {
    paddingLeft: 20,
    flexShrink: 1,
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  root__source: {
    color: theme.dark.colors.inactive,
    ...typography.mediumText,
  },
  root__title: {
    fontFamily: 'Poppins-Medium',
    flexWrap: 'wrap',
    ...typography.text,
  },
  root__newsMetadataWrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
