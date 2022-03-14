import { Text, View } from 'react-native';
import React from 'react';

import { strings } from '@/localization';
import { styles } from '@/screens/Home/Home.styles';

export const Home = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.home}>{strings.home.message}</Text>
    </View>
  );
};
