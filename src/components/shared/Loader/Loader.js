import React from 'react';

import { useTheme } from '@react-navigation/native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { bool } from 'prop-types';

import { styles } from '@/components/shared/Loader/Loader.styles';
import { any } from 'prop-types';

export const Loader = ({ loading, error }) => {
  const { colors } = useTheme();

  if (!loading || error) {
    return null;
  }

  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      exiting={FadeOutUp.duration(500)}
      style={styles.root}>
      <LottieView
        source={require('../../../assets/lottie/loader.json')}
        loop
        autoPlay
        colorFilters={[
          {
            keypath: 'Shape Layer 2',
            color: colors.secondary,
          },
          {
            keypath: 'Shape Layer 1',
            color: colors.secondary,
          },
        ]}
      />
    </Animated.View>
  );
};

Loader.propTypes = {
  loading: bool,
  error: bool,
};
