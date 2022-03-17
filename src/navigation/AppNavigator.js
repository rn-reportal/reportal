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
    <Drawer.Navigator screenOptions={{ headerShown: false, swipeEdgeWith: 0 }}>
      <Drawer.Screen name={NAVIGATION.home.screen} component={Home} />
    </Drawer.Navigator>
  );
};
