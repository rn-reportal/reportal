import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from '@/screens';
import { NAVIGATION } from '@/constants';

const Stack = createNativeStackNavigator();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NAVIGATION.onboarding.screen}
        component={Onboarding}
      />
    </Stack.Navigator>
  );
};
