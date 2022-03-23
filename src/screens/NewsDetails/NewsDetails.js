import { ScrollView } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import { OfflineNotice } from '@/components';
import { styles } from '@/screens/Home/Home.styles';

export const NewsDetails = ({ route }) => {
  const { data } = route.params;

  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.primary }]}>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: colors.primary }}>
        <OfflineNotice />
      </ScrollView>
    </SafeAreaView>
  );
};
