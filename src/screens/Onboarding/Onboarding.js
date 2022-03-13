import { Text, View, StatusBar } from 'react-native';
import React from 'react';

import { useTheme } from '@react-navigation/native';

import { strings } from '@/Localization';
import { styles } from '@/screens/Onboarding/Onboarding.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledTextSubstring } from '@/components';

export const Onboarding = () => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={colors.primary}
        translucent
        backgroundColor={'transparent'}
      />
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.primary }]}>
        <StyledTextSubstring
          text={strings.onboarding.greet}
          fontSize={30}
          color={colors.secondary}
          lineHeight={45}
        />
      </SafeAreaView>
    </>
  );
};
