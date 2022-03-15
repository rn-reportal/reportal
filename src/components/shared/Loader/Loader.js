import React, { useContext } from 'react';

import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import { NavigationContext } from '@/context';
import { styles } from '@/components/shared/Loader/Loader.styles';

export const Loader = () => {
  const scheme = useTheme();

  const {
    navigation: { loading },
  } = useContext(NavigationContext);

  if (!loading) {
    return null;
  }

  return (
    <LottieView
      source={require('../../../assets/lottie/loader.json')}
      loop
      autoPlay
      style={styles.root}
      colorFilters={[
        {
          keypath: 'Shape Layer 2',
          color: scheme.colors.secondary,
        },
        {
          keypath: 'Shape Layer 1',
          color: scheme.colors.secondary,
        },
      ]}
    />
  );
};
