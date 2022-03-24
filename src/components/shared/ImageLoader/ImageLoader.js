import { Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';

import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import { theme } from '@/theme';
import { styles } from '@/components/shared/ImageLoader/ImageLoader.styles';

export const ImageLoader = ({ source, fallback, style, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { colors } = useTheme();

  const handleOnLoadStart = () => {
    setIsLoading(true);
  };

  const handleOnLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <Animated.View
      onEntering={FadeIn.delay(100)}
      onExiting={FadeOut.delay(100)}
      style={styles.root}>
      <Image
        source={source ? { uri: source } : fallback}
        style={style}
        onLoadStart={handleOnLoadStart}
        onLoadEnd={handleOnLoadEnd}
        {...rest}
      />
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={theme.dark.colors.primary}
          style={[styles.root__loader, { backgroundColor: colors.inactive }]}
        />
      )}
    </Animated.View>
  );
};

ImageLoader.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  fallback: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rest: PropTypes.object,
};
