import { View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import { useQuery } from 'react-query';

import { CategoriesSlider, CategoryNewsSlider, Loader } from '@/components';
import { CATEGORIES, getLatestNews, LANGUAGES } from '@/api';
import { useRefreshOnScreenFocus } from '@/hooks';
import { styles } from '@/components/CategoriesSection/CategoriesSection.styles';

export const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.TOP);
  const isFirstMount = useRef(true);

  const { isLoading, isFetching, isPaused, error, data, refetch } = useQuery(
    ['categoryNews'],
    () =>
      getLatestNews(
        null,
        activeCategory,
        activeCategory === CATEGORIES.TOP ? 2 : 1,
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

  /* useRefreshOnScreenFocus(refetch); */

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
          categoryNews={data?.data?.results || []}
          isLoading={(isLoading && !isPaused) || isFetching}
        />
      </View>
      <Loader isLoading={(isLoading && !isPaused) || isFetching} />
    </>
  );
};
