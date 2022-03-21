import { ScrollView } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

import { Category } from '@/components';
import { CATEGORIES } from '@/api';
import { styles } from '@/components/CategoriesSection/CategoriesSlider/CategoriesSlider.styles';

export const CategoriesSlider = ({
  activeCategory,
  handleCategorySelection,
}) => {
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

CategoriesSlider.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  handleCategorySelection: PropTypes.func.isRequired,
};
