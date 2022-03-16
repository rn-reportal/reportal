import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { Home } from '@/screens';
import { NAVIGATION } from '@/constants';

const Stack = createDrawerNavigator();
const Drawer = createStackNavigator();

export const AppNavigator = () => {
  changeNavigationBarColor('transparent', true);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={NAVIGATION.home.screen} component={Home} />
    </Stack.Navigator>
  );
};
