import { StyleSheet } from 'react-native';

import { typography } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  root__input: {
    fontFamily: 'Poppins-Light',
    paddingRight: 20,
    paddingLeft: 60,
    width: '100%',
    height: 65,
    borderRadius: 10,
    position: 'relative',
    shadowColor: '#000',
    elevation: 25,
    ...typography.text,
  },
  root__icon: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [
      {
        translateY: -11.5,
      },
    ],
    zIndex: 2,
    fontSize: 22,
  },
});
