import { View, Dimensions } from 'react-native';
import React from 'react';

import { useTheme } from '@react-navigation/native';

import { ImageLoader, Text, CategoryNewsMetadata } from '@/components';
import { styles } from '@/components/CategoriesSection/CategoryNews/CategoryNews.styles';

const { width } = Dimensions.get('window');

const IMAGE_WIDTH = width / 3.5;

export const CategoryNews = ({ data, isLoading }) => {
  const { colors } = useTheme();

  const publishedAt = data.pubDate.split(/\s/);
  const publishedAtDate = publishedAt[0];
  const publishedAtTime = publishedAt[1].substr(0, 5);

  return (
    <View style={styles.root}>
      <ImageLoader
        source={data.image_url}
        fallback={require('../../../assets/images/category-news-fallback.jpg')}
        style={[
          styles.root__image,
          { width: IMAGE_WIDTH, height: IMAGE_WIDTH },
        ]}
      />
      <View style={styles.root__dataWrapper}>
        <Text style={styles.root__source}>{data?.source_id}</Text>
        <Text
          style={[styles.root__title, { color: colors.secondary }]}
          multiline
          numberOfLines={3}>
          {data.title}
        </Text>
        <View style={styles.root__newsMetadataWrapper}>
          <CategoryNewsMetadata
            metadata={publishedAtDate}
            iconName="calendar"
          />
          <CategoryNewsMetadata metadata={publishedAtTime} iconName="clock" />
        </View>
      </View>
    </View>
  );
};
