import React, { useState } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { UserContext } from '@/context';
import { RootNavigator } from '@/navigation';
import { strings } from '@/Localization';

const App = () => {
  const [user, setUser] = useState({
    lang: '',
    onboarding: true,
  });

  const modifyUser = user => {
    setUser(user);
  };

  /* Force english as default language */
  strings.setLanguage('en');

  return (
    <UserContext.Provider value={{ user, modifyUser }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigator />
      </GestureHandlerRootView>
    </UserContext.Provider>
  );
};

export default App;
