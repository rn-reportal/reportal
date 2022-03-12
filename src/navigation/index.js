import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from '@/navigation/AppNavigator';

const RootNavigator = () => {
  // @todo: get current user

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
