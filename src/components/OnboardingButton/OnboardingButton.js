import { TouchableNativeFeedback, View } from 'react-native';
import React, { useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

import { UserContext } from '@/context';
import { theme } from '@/theme';
import { styles } from '@/components/OnboardingButton/OnboardingButton.styles';

export const OnboardingButton = () => {
  const { user, setUser } = useContext(UserContext);

  const { colors } = useTheme();

  const handleOnPress = () => {
    setUser({
      ...user,
      common: {
        ...user.common,
        isOnboarded: true,
      },
    });

    try {
      AsyncStorage.setItem('isOnboarded', JSON.stringify(true));
    } catch (error) {
      /* Do nothing */
    }
  };

  return (
    <Animated.View
      style={[
        styles.root,
        { borderColor: colors.secondary, backgroundColor: colors.primary },
      ]}
      entering={FadeInDown.delay(1000).springify()}>
      <TouchableNativeFeedback
        onPress={handleOnPress}
        background={TouchableNativeFeedback.Ripple(
          theme.dark.colors.primary,
          true,
        )}>
        <View
          style={[
            styles.root__iconWrapper,
            { backgroundColor: colors.secondary },
          ]}>
          <Icon
            name="chevron-right"
            style={[styles.root__icon, { color: colors.primary }]}
          />
        </View>
      </TouchableNativeFeedback>
    </Animated.View>
  );
};
