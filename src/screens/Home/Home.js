import { Text, View } from 'react-native';
import React from 'react';

import { useQuery } from 'react-query';

import { Loader } from '@/components/shared/Loader/Loader';
import { getNews, CATEGORIES, LANGUAGES } from '@/api';
import { useRefreshOnScreenFocus } from '@/hooks';
import { strings } from '@/localization';
import { styles } from '@/screens/Home/Home.styles';

export const Home = () => {
  const { isLoading, isFetching, error, data, refetch } = useQuery(
    'news',
    () => getNews(null, CATEGORIES.TOP, LANGUAGES.ENGLISH),
    { retry: 3 },
  );

  useRefreshOnScreenFocus(refetch);

  const {
    results: {
      title,
      link,
      source_id,
      keywords,
      creator,
      image_url,
      video_url,
      description,
      pubDate,
      content,
      country,
      category,
      language,
    } = {},
    status,
    totalResults,
  } = data?.data || {};
  console.log(data?.data);
  return (
    <>
      <View style={styles.root}>
        <Text style={styles.home}>{strings.home.message}</Text>
      </View>
      <Loader isLoading={isLoading} isFetching={isFetching} />
    </>
  );
};
