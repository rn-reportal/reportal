import React, { useState, useEffect } from 'react';

import {
  focusManager,
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import NetInfo from '@react-native-community/netinfo';
import useAppState from 'react-native-appstate-hook';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from 'javascript-time-ago/locale/en.json';

import { UserContext } from '@/context';
import { RootNavigator } from '@/navigation';
import { strings } from '@/localization';

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState({
    common: {
      lang: '',
      isOnboarded: false,
    },
  });

  /* Force english as default language */
  strings.setLanguage('en');

  /* Configuration for refetching data on reconnect */
  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
      setOnline(state.isConnected);
    });
  });

  /* Configuration for refetching on app focus */
  const onAppStateChange = status => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  };

  useAppState({ onChange: onAppStateChange });

  const checkUserOnboardingStatus = async () => {
    try {
      const onboardingStatus = await AsyncStorage.getItem('isOnboarded');

      setUser({
        ...user,
        common: {
          ...user.common,
          isOnboarded: JSON.parse(onboardingStatus),
        },
      });
    } catch (error) {
      /* Do nothing */
    }
  };

  useEffect(() => {
    checkUserOnboardingStatus();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </UserContext.Provider>
  );
};

export default App;
