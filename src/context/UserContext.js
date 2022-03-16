import { createContext } from 'react';

export const UserContext = createContext({
  common: {
    lang: '',
    isOnboarded: false,
  },
});
