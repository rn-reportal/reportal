import { ScrollView } from 'react-native';
import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { Category } from '@/components';
import { CATEGORIES, getTopHeadlines, LANGUAGES } from '@/api';
import { styles } from '@/components/CategoriesSlider/CategoriesSlider.styles';

export const CategoriesSlider = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.GENERAL);

  const {
    isLoading: categoryNewsIsLoading,
    isFetching: categoryNewsIsFetching,
    error: categoryNewsError,
    data: categoryNews,
    refetch: categoryNewsRefetch,
  } = useQuery(
    ['categoryNews'],
    () => getTopHeadlines(null, activeCategory, LANGUAGES.ENGLISH, query),
    {
      retry: 3,
      enabled: false,
    },
  );

  const handleCategorySelection = category => {
    setActiveCategory(category);
    // categoryNewsRefetch();
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.root}>
      {Object.values(CATEGORIES).map((category, index) => (
        <Category
          category={category}
          activeCategory={activeCategory}
          setActiveCategory={handleCategorySelection}
          key={index}
        />
      ))}
    </ScrollView>
  );
};
