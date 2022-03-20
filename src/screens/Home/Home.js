import { View } from 'react-native';
import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { useTheme } from '@react-navigation/native';

import {
  Header,
  Input,
  TopHeadlinesCarousel,
  Text,
  CategoriesSlider,
  OfflineNotice,
} from '@/components';
import { LANGUAGES } from '@/api';
import { strings } from '@/localization';
import { typography } from '@/theme';
import { styles } from '@/screens/Home/Home.styles';

export const Home = () => {
  const [query, setQuery] = useState('');

  const { colors } = useTheme();

  const {
    isLoading: searchNewsIsLoading,
    isFetching: searchNewsIsFetching,
    error: searchNewsError,
    data: searchNews,
    refetch: searchNewsRefetch,
  } = useQuery(
    ['searchNews'],
    () => searchNews(null, null, LANGUAGES.ENGLISH, query),
    {
      retry: 3,
      enabled: false,
    },
  );

  const handleSearchChange = event => {
    event.persist();
    const { text } = event.nativeEvent;
    setQuery(text);
  };

  const handleOnSearchSubmit = event => {
    event.persist();
    const { text } = event.nativeEvent;
    const trimmedQuery = text.trim();

    // @todo: ADD FORMIK !!!
    if (trimmedQuery) {
      searchNewsRefetch(trimmedQuery);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.root}>
        <OfflineNotice />
        <Header />
        <Text
          style={[
            styles.root__title,
            typography.title,
            { color: colors.secondary },
          ]}>
          {strings.home.title}
        </Text>
        <View style={styles.root__searchWrapper}>
          <Input
            handleOnChange={handleSearchChange}
            handleOnSubmit={handleOnSearchSubmit}
            autoComplete="off"
            defaultValue={query}
            placeholder={strings.home.searchPlaceholder}
            textContentType="none"
            iconName="search"
            returnKeyType="search"
          />
        </View>
        <TopHeadlinesCarousel />
        <CategoriesSlider />
      </SafeAreaView>
    </>
  );
};
