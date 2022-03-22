import { View } from 'react-native';
import React from 'react';

import { theme } from '@/theme';

import { DrawerButton, UserProfileButton } from '@/components';
import { styles } from '@/components/shared/Header/Header.styles';

export const Header = () => {
  return (
    <View
      style={[styles.root, { backgroundColor: theme.dark.colors.secondary }]}>
      <DrawerButton />
      <UserProfileButton />
    </View>
  );
};
