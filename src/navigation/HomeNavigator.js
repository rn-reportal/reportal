import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@/screens';
import { NAVIGATION } from '@/constants';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home.screen} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
