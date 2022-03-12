import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from '@/navigation/HomeNavigator';
import { NAVIGATION } from '@/constants';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={NAVIGATION.home.tab} component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
