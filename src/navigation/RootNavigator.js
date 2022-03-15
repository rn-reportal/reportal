import { useColorScheme, StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from '@/navigation';
import { Loader } from '@/components/shared/Loader/Loader';
import { theme } from '@/theme';

export const RootNavigator = () => {
  const scheme = useColorScheme();

  /* RootNavigator exists so we can e.g. have isUserLoggedIdn ? <AppNavigator/> : <LoginNavigator/> */
  return (
    <NavigationContainer theme={theme.dark}>
      <StatusBar
        barStyle={theme.dark.colors.primary}
        translucent
        backgroundColor={'transparent'}
      />
      <AppNavigator />
      <Loader />
    </NavigationContainer>
  );
};
