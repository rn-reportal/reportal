import { View } from 'react-native';
import React from 'react';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

import { styles } from '@/components/shared/Header/DrawerButton/DrawerButton.styles';

export const DrawerButton = () => {
  const { colors } = useTheme();

  const handleOnPress = () => {
    /* Handle drawer */
  };

  return (
    <TouchableNativeFeedback style={styles.root} onPress={handleOnPress}>
      <Icon
        name="menu"
        style={[styles.root__icon, { color: colors.secondary }]}
      />
    </TouchableNativeFeedback>
  );
};
