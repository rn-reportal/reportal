import { StatusBar, ImageBackground, View } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingButton, Text } from '@/components';
import { strings } from '@/localization';
import { theme, typography } from '@/theme';
import { styles } from '@/screens/Onboarding/Onboarding.styles';

export const Onboarding = () => {
  return (
    <>
      <StatusBar
        barStyle={theme.dark.colors.primary}
        translucent
        backgroundColor={'transparent'}
      />
      <SafeAreaView style={styles.root}>
        <ImageBackground
          source={require('../../assets/images/onboarding_bg.jpg')}
          style={styles.root__backgroundImage}>
          <View style={styles.root__contentWrapper}>
            <Text style={styles.root__tagline}>
              {strings.onboarding.tagline}
            </Text>
            <Text style={[styles.root__greet, typography.text]}>
              {strings.onboarding.greet}
            </Text>
            <OnboardingButton />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
