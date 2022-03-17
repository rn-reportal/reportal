import { Image } from 'react-native';
import React from 'react';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import { styles } from '@/components/shared/Header/DrawerButton/DrawerButton.styles';

export const UserProfileButton = () => {
  const handleOnPress = () => {
    /* Handle user profile */
  };

  return (
    <TouchableNativeFeedback style={styles.root} onPress={handleOnPress}>
      <Image source={require('../../../../assets/images/avatar.png')} />
    </TouchableNativeFeedback>
  );
};
