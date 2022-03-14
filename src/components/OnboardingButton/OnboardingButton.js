import { View, Text, TouchableNativeFeedback } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { theme } from '@/theme';
import { styles } from '@/components/OnboardingButton/OnboardingButton.styles';

export const OnboardingButton = () => {
  const handleOnPress = () => {
    console.log('jes');
  };

  return (
    <View style={styles.root}>
      <TouchableNativeFeedback
        onPress={handleOnPress}
        background={TouchableNativeFeedback.Ripple(
          theme.dark.colors.primary,
          true,
        )}>
        <View style={styles.root__iconWrapper}>
          <Icon name="chevron-right" style={styles.root__icon} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
