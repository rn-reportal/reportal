import React from 'react';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from '@/components/shared/Header/DrawerButton/DrawerButton.styles';
import { theme } from '@/theme';

export const DrawerButton = () => {
  const handleOnPress = () => {
    /* Handle drawer */
  };

  return (
    <TouchableNativeFeedback style={styles.root} onPress={handleOnPress}>
      <Icon
        name="menu"
        style={[styles.root__icon, { color: theme.dark.colors.primary }]}
      />
    </TouchableNativeFeedback>
  );
};
