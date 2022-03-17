import { View } from 'react-native';
import React from 'react';

import { DrawerButton, UserProfileButton } from '@/components';
import { styles } from '@/components/shared/Header/Header.styles';

export const Header = () => {
  return (
    <View style={styles.root}>
      <DrawerButton />
      <UserProfileButton />
    </View>
  );
};
