import { ScrollView, View } from 'react-native';
import React from 'react';

import Animated, { FadeInDown } from 'react-native-reanimated';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import { Text, Chip, Keywords } from '@/components';
import { getDateAndTimeFromPublished } from '@/util/time';
import { styles } from '@/components/DetailsModal/DetailsModal.styles';

export const DetailsModal = ({ data }) => {
  const { colors } = useTheme();
  console.log(data);
  const { publishedAtDate, publishedAtTime } = getDateAndTimeFromPublished(
    data?.pubDate,
  );

  return (
    <Animated.View
      entering={FadeInDown.delay(250)}
      style={[styles.root, { backgroundColor: colors.primary }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.root__contentSlider}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.root__metadataSlider}>
          <Chip iconName="edit-2" text={data.creator && data.creator[0]} />
          <Chip iconName="calendar" text={publishedAtDate} />
          <Chip iconName="clock" text={publishedAtTime} />
        </ScrollView>
        <Text style={[styles.root__title, { color: colors.secondary }]}>
          {data.title}
        </Text>
        <Text style={[styles.root__description, { color: colors.inactive }]}>
          {data.full_description || data.content || data.description}
        </Text>
        <Keywords keywords={data.keywords} />
      </ScrollView>
    </Animated.View>
  );
};

DetailsModal.propTypes = {
  data: PropTypes.object.isRequired,
};
