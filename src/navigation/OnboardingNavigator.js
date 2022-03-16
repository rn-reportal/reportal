import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { Onboarding } from '@/screens';
import { NAVIGATION } from '@/constants';

const Stack = createDrawerNavigator();

export const OnboardingNavigator = () => {
  changeNavigationBarColor('transparent', true);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NAVIGATION.onboarding.screen}
        component={Onboarding}
      />
    </Stack.Navigator>
  );
};
