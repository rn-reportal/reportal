import { View, Dimensions } from 'react-native';
import React from 'react';

import { useTheme } from '@react-navigation/native';

import { ImageLoader, Text } from '@/components';
import { styles } from '@/components/CategoriesSection/CategoryNews/CategoryNews.styles';

const { width } = Dimensions.get('window');

const IMAGE_WIDTH = width / 3.5;

export const CategoryNews = ({ data, isLoading }) => {
  const { colors } = useTheme();

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
        <Text
          style={[styles.root__title, { color: colors.secondary }]}
          multiline
          numberOfLines={3}>
          {data.title}
        </Text>
        <View></View>
      </View>
    </View>
  );
};
