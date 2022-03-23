import { ImageBackground, View, useColorScheme } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FadeIn, FadeInLeft } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';

import { OnboardingButton, Text } from '@/components';
import { strings } from '@/localization';
import { typography } from '@/theme';
import { styles } from '@/screens/Onboarding/Onboarding.styles';

export const Onboarding = () => {
  const scheme = useColorScheme();

  const { colors } = useTheme();

  const backgroundImage =
    scheme === 'light'
      ? require('../../assets/images/onboarding-bg-light.jpg')
      : require('../../assets/images/onboarding-bg-dark.jpg');

  return (
    <>
      <SafeAreaView style={styles.root}>
        <ImageBackground
          source={backgroundImage}
          style={styles.root__backgroundImage}>
          <View style={styles.root__contentWrapper}>
            <Text
              style={[
                styles.root__tagline,
                { color: colors.secondary },
                typography.hero,
              ]}
              animation={{ entering: FadeIn.duration(1000) }}>
              {strings.onboarding.tagline}
            </Text>
            <Text
              style={[
                styles.root__greet,
                { color: colors.text },
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
