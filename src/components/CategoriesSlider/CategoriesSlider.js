import { ScrollView } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

import { CategoryButton } from '@/components';
import { CATEGORIES } from '@/api';
import { styles } from '@/components/CategoriesSlider/CategoriesSlider.styles';

export const CategoriesSlider = ({ activeCategory, setActiveCategory }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.root}>
      {Object.values(CATEGORIES).map((category, index) => (
        <CategoryButton
          category={category}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          key={index}
        />
      ))}
    </ScrollView>
  );
};

CategoriesSlider.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};
