import { Text, View } from 'react-native';
import React from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';

import { Loader } from '@/components/shared/Loader/Loader';
import { strings } from '@/localization';
import { styles } from '@/screens/Home/Home.styles';
import { news } from '@/api/news/paths';

export const Home = () => {
  const { isLoading, error, data } = useQuery('fetchCountryHeadlinNews', () =>
    axios(news.getTopHeadlines(10, 'general')),
  );
  console.log(data);
  return (
    <>
      <View style={styles.root}>
        <Text style={styles.home}>{strings.home.message}</Text>
      </View>
      <Loader loading={isLoading} error={error !== null} />
    </>
  );
};
