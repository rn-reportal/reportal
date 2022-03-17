import { View, Dimensions, Image } from 'react-native';
import React, { useRef, useState } from 'react';

import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';

import { styles } from '@/components/TopHeadlinesCarousel/TopHeadlinesCarousel.styles';

const { width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.7;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export const TopHeadlinesCarousel = ({ news }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      data={[{ url: 'left-spacer' }, ...news, { url: 'right-spacer' }]}
      keyExtractor={item => item.url}
      horizontal
      contentContainerStyle={styles.root}
      snapToInterval={ITEM_SIZE}
      pagingEnabled
      decelerationRate={0}
      bounces={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true },
      )}
      renderItem={({ item, index }) => {
        if (!item.title) {
          return <View style={{ width: SPACER_ITEM_SIZE }} />;
        }

        const scale = scrollX.interpolate({
          inputRange: [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ],
          outputRange: [1, 1.2, 1],
          extrapolate: 'clamp',
        });

        return (
          <View style={{ width: ITEM_SIZE }}>
            <Animated.View
              style={[styles.root__animatedItem, { transform: [{ scale }] }]}>
              <Image
                source={
                  item.urlToImage
                    ? { uri: item.urlToImage }
                    : require('../../assets/images/fallback.jpg')
                }
                style={[styles.root__itemImage, { height: ITEM_SIZE / 1.4 }]}
              />
            </Animated.View>
          </View>
        );
      }}
    />
  );
};

TopHeadlinesCarousel.propTypes = {
  news: PropTypes.array,
};
