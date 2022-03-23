import { View, Dimensions } from 'react-native';
import React from 'react';

import { useTheme } from '@react-navigation/native';

import { ImageLoader, Text, CategoryNewsMetadata } from '@/components';
import { styles } from '@/components/CategoriesSection/CategoryNews/CategoryNews.styles';

const { width } = Dimensions.get('window');

const IMAGE_WIDTH = width / 3.5;

export const CategoryNews = ({ data, isLoading }) => {
  const { colors } = useTheme();

  const datePublishedAt = data.publishedAt?.split('T')[0];
  const timePublishedAt = data.publishedAt?.split('T')[1]?.split(/:[0-9]*Z/)[0];

  return (
    <View style={styles.root}>
      <ImageLoader
        source={data.urlToImage}
        fallback={require('../../../assets/images/category-news-fallback.jpg')}
        style={[
          styles.root__image,
          { width: IMAGE_WIDTH, height: IMAGE_WIDTH },
        ]}
      />
      <View style={styles.root__dataWrapper}>
        <Text style={styles.root__source}>{data?.source?.name}</Text>
        <Text
          style={[styles.root__title, { color: colors.secondary }]}
          multiline
          numberOfLines={3}>
          {data.title}
        </Text>
        <View style={styles.root__newsMetadataWrapper}>
          <CategoryNewsMetadata
            metadata={datePublishedAt}
            iconName="calendar"
          />
          <CategoryNewsMetadata metadata={timePublishedAt} iconName="clock" />
        </View>
      </View>
    </View>
  );
};
