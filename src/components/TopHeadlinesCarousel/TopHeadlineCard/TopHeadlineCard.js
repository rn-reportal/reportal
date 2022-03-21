import { View } from 'react-native';
import React from 'react';

import { FadeIn } from 'react-native-reanimated';
import TimeAgo from 'javascript-time-ago';
import PropTypes from 'prop-types';

import { Text, BookmarkButton, ImageLoader } from '@/components';
import { styles } from '@/components/TopHeadlinesCarousel/TopHeadlineCard/TopHeadlineCard.styles';

export const TopHeadlineCard = ({ data, source, width, height }) => {
  const timeAgo = new TimeAgo('en-US');

  const publishedAt = timeAgo.format(
    Date.parse(data.publishedAt),
    'round-minute',
  );

  const handleOnBookmarkPress = () => {
    // do nothing for now
  };

  return (
    <View style={styles.root}>
      <ImageLoader
        source={source}
        fallback={require('../../../assets/images/top-headlines-fallback.jpg')}
        style={[styles.root__image, { height: height }]}
      />
      <View style={styles.root__header}>
        <Text
          style={styles.root__publishedAt}
          animation={{ entering: FadeIn.delay(500) }}>
          {publishedAt}
        </Text>
        <BookmarkButton onPress={handleOnBookmarkPress} />
      </View>
      <View style={styles.root__footer}>
        <Text
          style={styles.root__title}
          animation={{ entering: FadeIn.delay(500) }}
          multiline
          numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </View>
  );
};

TopHeadlineCard.propTypes = {
  data: PropTypes.object.isRequired,
  source: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  height: PropTypes.number.isRequired,
};
