import { useColorScheme, StatusBar } from 'react-native';
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

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

  return (
    <NavigationContainer theme={theme[scheme]}>
      <StatusBar
        barStyle={scheme === 'light' ? 'dark-content' : 'light-content'}
        translucent
        backgroundColor="transparent"
      />
      {isOnboarded ? <AppNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
};
