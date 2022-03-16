import { useColorScheme, StatusBar } from 'react-native';
import React, { useContext } from 'react';

import { NavigationContainer, useTheme } from '@react-navigation/native';

import { AppNavigator } from '@/navigation';
import { OnboardingNavigator } from '@/navigation/OnboardingNavigator';
import { UserContext } from '@/context';
import { theme } from '@/theme';

export const RootNavigator = () => {
  const {
    user: {
      common: { isOnboarded },
    },
  } = useContext(UserContext);

  const scheme = useColorScheme();

  const { colors } = useTheme();

  return (
    <NavigationContainer theme={theme.dark}>
      <StatusBar
        barStyle={colors.primary}
        translucent
        backgroundColor="transparent"
      />
      {isOnboarded ? <AppNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
};
