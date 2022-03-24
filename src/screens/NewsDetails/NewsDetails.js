import { Dimensions, StatusBar } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { DetailsModal, ImageLoader, OfflineNotice } from '@/components';

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT = height / 2.75;

export const NewsDetails = ({ route }) => {
  const { data } = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageLoader
        source={data.image_url}
        fallback={require('../../assets/images/top-headlines-fallback.jpg')}
        style={{ width: width, height: IMAGE_HEIGHT }}
      />
      <OfflineNotice />
      <DetailsModal data={data} />
    </>
  );
};
