import AsyncStorage from '@react-native-async-storage/async-storage';

import { DEFAULT_LANG } from '@/localization';

export const getDeviceLanguageFromStorage = async () => {
  try {
    const lang = await AsyncStorage.getItem('lang');

    return lang ? lang : DEFAULT_LANG;
  } catch (error) {
    return DEFAULT_LANG;
  }
};

export const updateDeviceLanguageToStorage = async lang => {
  try {
    await AsyncStorage.setItem('lang', lang);

    return lang ? lang : DEFAULT_LANG;
  } catch (error) {}
};
