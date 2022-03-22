import { View } from 'react-native';
import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { Input } from '@/components';
import { searchNews } from '@/api';
import { strings } from '@/localization';
import { styles } from '@/components/SearchBar/SearchBar.styles';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const { isLoading, isFetching, error, data, refetch } = useQuery(
    ['searchNews'],
    () => searchNews(null, null, 1, 20, LANGUAGES.ENGLISH, query),
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
      refetch(trimmedQuery);
    }
  };

  return (
    <View style={styles.root}>
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
  );
};
