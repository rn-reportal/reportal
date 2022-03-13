import { useColorScheme } from 'react-native';
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { UserContext } from '@/context';
import { OnboardingNavigator, AppNavigator } from '@/navigation';
import { theme } from '@/theme';

export const RootNavigator = () => {
  const scheme = useColorScheme();

  const {
    user: { onboarding },
  } = useContext(UserContext);

  return (
    <NavigationContainer theme={theme['dark']}>
      {onboarding ? <OnboardingNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
