import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
  },
  root__contentSlider: {
    flex: 1,
    marginBottom: 20,
  },
  root__metadataSlider: {
    marginBottom: 20,
  },
  root__title: {
    ...typography.label,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  root__description: {
    ...typography.text,
    marginBottom: 20,
  },
});
