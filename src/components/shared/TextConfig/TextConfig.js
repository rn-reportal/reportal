import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import { styles } from '@/components/shared/TextConfig/TextConfig.styles';

export const TextConfig = ({ style, children, ...rest }) => {
  const substrings = children.split(/\s+/);

  return (
    <Text style={[styles.root, style]} {...rest}>
      {substrings.map((substring, index) => {
        if (substring.startsWith('**')) {
          return (
            <Text style={styles.root__bold} {...rest} key={index}>
              {substring.split('**')[1]}{' '}
            </Text>
          );
        } else if (substring.startsWith('*')) {
          return (
            <Text style={styles.root__italic} {...rest} key={index}>
              {substring.split('*')[1]}{' '}
            </Text>
          );
        } else if (substring.startsWith('__')) {
          return (
            <Text style={styles.root__underline} {...rest} key={index}>
              {substring.split('__')[1]}{' '}
            </Text>
          );
        } else {
          return `${substring} `;
        }
      })}
    </Text>
  );
};

TextConfig.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
  children: PropTypes.string.isRequired,
};
