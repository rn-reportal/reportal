import { TouchableNativeFeedback } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

import { Text } from '@/components';
import { styles } from '@/components/CategoriesSlider/CategoriesSlider.styles';
import { useTheme } from '@react-navigation/native';

export const CategoryButton = ({
  activeCategory,
  category,
  setActiveCategory,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableNativeFeedback
      onPress={() => setActiveCategory(category)}
      style={styles.root}>
      <Text
        style={[
          styles.root__category,
          category === activeCategory && { color: colors.secondary } &&
            styles['root__category--active'],
        ]}>
        {category}
      </Text>
    </TouchableNativeFeedback>
  );
};

CategoryButton.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};
