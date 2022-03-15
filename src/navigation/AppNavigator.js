import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home, Onboarding } from '@/screens';
import { NAVIGATION } from '@/constants';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  /* We would use Tab.Navigator and Tab.Screens if wou would have bottom tabs navigator.
  This also means that every component of Tab.Screen could be Stack.Navigator */
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NAVIGATION.onboarding.screen}
        component={Onboarding}
      />
      <Stack.Screen name={NAVIGATION.home.screen} component={Home} />
    </Stack.Navigator>
  );
};
