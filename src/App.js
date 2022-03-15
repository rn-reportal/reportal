import React, { useState } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContext, UserContext } from '@/context';
import { RootNavigator } from '@/navigation';

import { strings } from '@/localization';

const App = () => {
  const [user, setUser] = useState({
    lang: '',
    onboarding: true,
  });

  const [navigation, setNavigation] = useState({
    loading: false,
  });

  const modifyUser = user => {
    setUser(user);
  };

  const modifyNavigation = navigation => {
    setNavigation(navigation);
  };

  /* Force english as default language */
  strings.setLanguage('en');

  return (
    <UserContext.Provider value={{ user, modifyUser }}>
      <NavigationContext.Provider value={{ navigation, modifyNavigation }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootNavigator />
        </GestureHandlerRootView>
      </NavigationContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
