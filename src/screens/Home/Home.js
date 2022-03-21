import { ScrollView } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import {
  Header,
  TopHeadlinesCarousel,
  Text,
  OfflineNotice,
  SearchBar,
  CategoriesSection,
} from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Home/Home.styles';

export const Home = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <OfflineNotice />
        <Header />
        <Text style={[styles.root__title, { color: colors.secondary }]}>
          {strings.home.title}
        </Text>
        <SearchBar />
        <TopHeadlinesCarousel />
        <CategoriesSection />
      </ScrollView>
    </SafeAreaView>
  );
};
