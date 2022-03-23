import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
    borderRadius: 20,
    width: '100%',
    overflow: 'hidden',
  },
  root__contentWrapper: {},
  root__image: {
    borderRadius: 20,
    width: '100%',
  },
  root__header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, .25)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  root__publishedAt: {
    color: theme.dark.colors.secondary,
    fontFamily: 'Poppins-Medium',
    ...typography.smallText,
  },
  root__footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, .25)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  root__title: {
    color: theme.dark.colors.secondary,
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'top',
    ...typography.mediumText,
  },
});
