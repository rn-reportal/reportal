import { View } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import { Text, Chip } from '@/components';
import { styles } from '@/components/DetailsModal/Keywords/Keywords.styles';

export const Keywords = ({ keywords }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.root}>
      <Text style={[styles.root__keywordsLabel, { color: colors.secondary }]}>
        Keywords:
      </Text>
      <View style={styles.root__keywordsWrapper}>
        {keywords ? (
          keywords.map((keyword, index) => <Chip text={keyword} key={index} />)
        ) : (
          <Text style={styles.root__noKeywords}>--</Text>
        )}
      </View>
    </View>
  );
};

Keywords.propTypes = {
  keywords: PropTypes.array,
};
