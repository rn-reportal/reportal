import { typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    marginRight: 10,
    marginBottom: 10,
  },
  root__icon: {
    fontSize: 16,
    marginRight: 7,
  },
  root__text: {
    ...typography.mediumText,
  },
});
