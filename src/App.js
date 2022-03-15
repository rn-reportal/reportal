import React, { useState } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { UserContext } from '@/context';
import { RootNavigator } from '@/navigation';
import { strings } from '@/localization';

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </UserContext.Provider>
  );
};

export default App;
