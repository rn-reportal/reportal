import { TouchableNativeFeedback, View } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

import { Text } from '@/components';
import { styles } from '@/components/CategoriesSection/Category/Category.styles';
import { useTheme } from '@react-navigation/native';

export const Category = ({ activeCategory, category, setActiveCategory }) => {
  const { colors } = useTheme();

  const isActive = category === activeCategory;

  return (
    <TouchableNativeFeedback onPress={() => setActiveCategory(category)}>
      <View style={styles.root}>
        <Text
          style={[
            styles.root__category,
            isActive && styles['root__category--active'],
          ]}>
          {category}
        </Text>
        {isActive && (
          <View
            style={[
              styles.root__activeBullet,
              { backgroundColor: colors.secondary },
            ]}
          />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

Category.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};
