import { View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import { useQuery } from 'react-query';

import { CategoriesSlider, CategoryNewsSlider, Loader } from '@/components';
import { CATEGORIES, getTopHeadlines, LANGUAGES } from '@/api';
import { styles } from '@/components/CategoriesSection/CategoriesSection.styles';

export const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.GENERAL);
  const isFirstMount = useRef(true);

  const { isLoading, isFetching, isPaused, error, data, refetch } = useQuery(
    ['categoryNews'],
    () =>
      getTopHeadlines(
        null,
        activeCategory,
        activeCategory === CATEGORIES.GENERAL ? 2 : 1,
        10,
        LANGUAGES.ENGLISH,
        null,
      ),
    {
      retry: 3,
      enabled: false,
    },
  );

  const handleCategorySelection = category => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    if (isFirstMount.current) {
      refetch();
      isFirstMount.current = false;
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [activeCategory]);

  return (
    <>
      <View style={styles.root}>
        <CategoriesSlider
          activeCategory={activeCategory}
          handleCategorySelection={handleCategorySelection}
        />
        <CategoryNewsSlider
          categoryNews={data?.data?.articles || []}
          isLoading={(isLoading && !isPaused) || isFetching}
        />
      </View>
      <Loader isLoading={(isLoading && !isPaused) || isFetching} />
    </>
  );
};
