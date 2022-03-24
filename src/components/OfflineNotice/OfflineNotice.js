import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import NetInfo from '@react-native-community/netinfo';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { strings } from '@/localization';
import { styles } from '@/components/OfflineNotice/OfflineNotice.styles';

export const OfflineNotice = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setIsOffline(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  if (!isOffline) {
    return null;
  }

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={styles.root}>
      <Text style={styles.root__noConnectionMessage}>
        {strings.common.offline}
      </Text>
    </Animated.View>
  );
};
