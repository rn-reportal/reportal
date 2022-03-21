import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { CategoriesSlider, CategoryNews } from '@/components';
import { CATEGORIES, getTopHeadlines, LANGUAGES } from '@/api';
import { styles } from '@/components/CategoriesSection/CategoriesSection.styles';

export const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.GENERAL);

  const { isLoading, isFetching, isPaused, error, data, refetch } = useQuery(
    ['categoryNews'],
    () => getTopHeadlines(null, activeCategory, 1, LANGUAGES.ENGLISH, null),
    {
      retry: 3,
      enabled: false,
    },
  );

  const handleCategorySelection = category => {
    setActiveCategory(category);
    refetch();
  };

  const categoryNews = data?.data?.articles || [];

  return (
    <View style={styles.root}>
      <CategoriesSlider
        activeCategory={activeCategory}
        handleCategorySelection={handleCategorySelection}
      />
      <ScrollView
        contentContainerStyle={styles.root__newsWrapper}
        showsVerticalScrollIndicator={false}>
        {categoryNews.map((news, index) => (
          <CategoryNews
            data={news}
            isLoading={(isLoading && !isPaused) || isFetching}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};
