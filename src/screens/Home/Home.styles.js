import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {},
  root__title: {
    marginTop: 20,
    paddingHorizontal: 20,
    ...typography.title,
  },
});
