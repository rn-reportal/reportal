import { View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

import { FadeIn } from 'react-native-reanimated';
import TimeAgo from 'javascript-time-ago';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { Text, BookmarkButton, ImageLoader } from '@/components';
import { styles } from '@/components/TopHeadlinesCarousel/TopHeadlineCard/TopHeadlineCard.styles';

export const TopHeadlineCard = ({ data, height }) => {
  const navigation = useNavigation();

  const timeAgo = new TimeAgo('en-US');

  const publishedAt = timeAgo.format(Date.parse(data.pubDate), 'round-minute');

  const handleOnBookmarkPress = () => {
    /* do nothing for now */
  };

  const handleOnCardPress = () => {
    navigation.navigate('News Details', { data: data });
  };

  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback onPress={handleOnCardPress}>
        <View style={styles.root__contentWrapper} pointerEvents="box-only">
          <ImageLoader
            source={data.image_url}
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
      </TouchableWithoutFeedback>
    </View>
  );
};

TopHeadlineCard.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
};
