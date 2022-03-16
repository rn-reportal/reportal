import { ImageBackground, View } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FadeIn, FadeInLeft } from 'react-native-reanimated';

import { OnboardingButton, Text } from '@/components';
import { strings } from '@/localization';
import { theme, typography } from '@/theme';
import { styles } from '@/screens/Onboarding/Onboarding.styles';

export const Onboarding = () => {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <ImageBackground
          source={require('../../assets/images/onboarding_bg.jpg')}
          style={styles.root__backgroundImage}>
          <View style={styles.root__contentWrapper}>
            <Text
              style={[
                styles.root__tagline,
                { color: theme.dark.colors.secondary },
                typography.hero,
              ]}
              animation={{ entering: FadeIn.duration(1000) }}>
              {strings.onboarding.tagline}
            </Text>
            <Text
              style={[
                styles.root__greet,
                { color: theme.dark.colors.text },
                typography.text,
              ]}
              animation={{ entering: FadeInLeft.delay(500).duration(500) }}>
              {strings.onboarding.greet}
            </Text>
            <OnboardingButton />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
