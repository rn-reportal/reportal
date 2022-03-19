import { StyleSheet } from 'react-native';

import { theme, typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  root__image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    margin: 0,
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
