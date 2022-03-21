import { View, Dimensions } from 'react-native';
import React, { useRef } from 'react';

import Animated from 'react-native-reanimated';
import { useQuery } from 'react-query';

import { TopHeadlineCard, Loader } from '@/components';
import { useRefreshOnScreenFocus } from '@/hooks';
import { CATEGORIES, getTopHeadlines, LANGUAGES } from '@/api';
import { styles } from '@/components/TopHeadlinesCarousel/TopHeadlinesCarousel.styles';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.72;
const ITEM_HEIGHT = ITEM_WIDTH / 1.4;
/* FLATLIST_HEIGHT is needed because we are up-scaling current item and without it,
it goes out of the height bounds of flatlist */
const FLATLIST_HEIGHT = ITEM_HEIGHT * 1.2;
const SPACER_ITEM_SIZE = (width - ITEM_WIDTH) / 2;

export const TopHeadlinesCarousel = () => {
  const { isLoading, isFetching, isPaused, error, data, refetch } = useQuery(
    ['topHeadlines'],
    () => getTopHeadlines(null, CATEGORIES.GENERAL, 1, LANGUAGES.ENGLISH, null),
    {
      retry: 3,
      networkMode: 'online',
    },
  );

  useRefreshOnScreenFocus(refetch);

  const topHeadlinesNews = data?.data?.articles || [];

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={[
          { url: 'left-spacer' },
          ...topHeadlinesNews,
          { url: 'right-spacer' },
        ]}
        keyExtractor={item => item.url}
        horizontal
        contentContainerStyle={[styles.root, { height: FLATLIST_HEIGHT }]}
        snapToInterval={ITEM_WIDTH}
        pagingEnabled
        decelerationRate="fast"
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
              (index - 2) * ITEM_WIDTH,
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
            ],
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.root__animatedItem,
                { width: ITEM_WIDTH, transform: [{ scale }] },
              ]}>
              <TopHeadlineCard
                data={item}
                source={item.urlToImage}
                width={ITEM_WIDTH}
                height={ITEM_HEIGHT}
              />
            </Animated.View>
          );
        }}
      />
      <Loader isLoading={(isLoading && !isPaused) || isFetching} />
    </>
  );
};
