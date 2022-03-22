import { ScrollView } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

import { CategoryNews } from '@/components';
import { styles } from '@/components/CategoriesSection/CategoryNewsSlider/CategoryNewsSlider.styles';

export const CategoryNewsSlider = ({ categoryNews, isLoading }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      showsVerticalScrollIndicator={false}>
      {categoryNews.map((news, index) => (
        <CategoryNews data={news} isLoading={isLoading} key={index} />
      ))}
    </ScrollView>
  );
};

CategoryNewsSlider.propTypes = {
  categoryNews: PropTypes.array,
  isLoading: PropTypes.bool,
};
