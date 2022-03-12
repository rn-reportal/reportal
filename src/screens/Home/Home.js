import { Text, View } from 'react-native';
import React from 'react';

import { strings } from '@/Localization';
import { styles } from '@/screens/Home/Home.styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>{strings.home.message}</Text>
    </View>
  );
};
