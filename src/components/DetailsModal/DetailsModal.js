import { ScrollView } from 'react-native';
import React from 'react';

import Animated, { FadeInDown } from 'react-native-reanimated';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import { Text } from '@/components';
import { styles } from '@/components/DetailsModal/DetailsModal.styles';

export const DetailsModal = ({ data }) => {
  const { colors } = useTheme();
  console.log(data);
  return (
    <Animated.View
      entering={FadeInDown.delay(250)}
      style={[styles.root, { backgroundColor: colors.primary }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.root__scrollView}>
        <Text>{data.content || data.full_description}</Text>
      </ScrollView>
    </Animated.View>
  );
};

DetailsModal.propTypes = {
  data: PropTypes.object.isRequired,
};
