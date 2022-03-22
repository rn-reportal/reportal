import { View } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import { Text } from '@/components';
import { styles } from '@/components/CategoriesSection/CategoryNewsMetadata/CategoryNewsMetadata.styles';

export const CategoryNewsMetadata = ({ iconName, metadata }) => {
  return (
    <View style={styles.root}>
      <Icon name={iconName} style={styles.root__icon} />
      <Text style={styles.root__metadata}>{metadata}</Text>
    </View>
  );
};

CategoryNewsMetadata.propTypes = {
  iconName: PropTypes.string,
  metadata: PropTypes.string,
};
