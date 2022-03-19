import React, { useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { styles } from '@/components/TopHeadlinesCarousel/BookmarkButton/BookmarkButton.styles';

export const BookmarkButton = ({ onPress }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleOnBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
    onPress();
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleOnBookmarkPress}
      style={styles.root}>
      <Icon
        name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
        style={[styles.root__icon]}
      />
    </TouchableWithoutFeedback>
  );
};

BookmarkButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};
