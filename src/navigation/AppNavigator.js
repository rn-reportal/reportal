import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { Home, NewsDetails } from '@/screens';
import { NAVIGATION } from '@/constants';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  changeNavigationBarColor('transparent', true);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.home.screen}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.details.screen}
        component={NewsDetails}
        options={{
          title: null,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
