import { View } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import { Text } from '@/components';
import { styles } from '@/components/shared/Chip/Chip.styles';

export const Chip = ({ text, iconName }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.root,
        { backgroundColor: colors.primary, borderColor: colors.secondary },
      ]}>
      {iconName && (
        <Icon
          name={iconName}
          style={[styles.root__icon, { color: colors.secondary }]}
        />
      )}
      <Text style={[styles.root__text, { color: colors.secondary }]}>
        {text ? text : '--'}
      </Text>
    </View>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};
