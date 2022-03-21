import React from 'react';

import { useTheme } from '@react-navigation/native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { bool } from 'prop-types';

import { styles } from '@/components/shared/Loader/Loader.styles';
import { Portal } from 'react-native-paper';

export const Loader = ({ isLoading }) => {
  const { colors } = useTheme();

  if (!isLoading) {
    return null;
  }

  return (
    <Portal>
      <Animated.View
        entering={FadeInUp.duration(500)}
        exiting={FadeOutUp.duration(500)}
        style={[styles.root, { backgroundColor: colors.primary }]}>
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
    </Portal>
  );
};

Loader.propTypes = {
  isLoading: bool.isRequired,
};
