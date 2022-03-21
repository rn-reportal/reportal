import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    paddingVertical: 25,
  },
  root__title: {
    marginTop: 20,
    paddingHorizontal: 25,
    ...typography.title,
  },
});
