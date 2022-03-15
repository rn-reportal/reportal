import { TouchableNativeFeedback, View } from 'react-native';
import React, { useContext } from 'react';

import Animated, { FadeInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '@/context';
import { NAVIGATION } from '@/constants';
import { theme } from '@/theme';
import { styles } from '@/components/OnboardingButton/OnboardingButton.styles';

export const OnboardingButton = () => {
  const { modifyUser, user } = useContext(UserContext);

  const navigation = useNavigation();

  const handleOnPress = () => {
    modifyUser({
      ...user,
      onboarding: false,
    });

    navigation.navigate(NAVIGATION.home.screen, {
      from: NAVIGATION.onboarding.screen,
    });
  };

  return (
    <Animated.View
      style={styles.root}
      entering={FadeInDown.delay(1000).springify()}>
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
    </Animated.View>
  );
};
