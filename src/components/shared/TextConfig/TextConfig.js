import React from 'react';
import { Text } from 'react-native';

import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';

import { styles } from '@/components/shared/TextConfig/TextConfig.styles';

export const TextConfig = ({ style, animation, children, ...rest }) => {
  // @todo: refactor for nesting cases, e.g. italic inside bold
  const text = children.split(/\s/g).reduce((acc, curr) => {
    const previousVal = acc[acc.length - 1];

    if (
      previousVal &&
      previousVal.startsWith('**') &&
      !previousVal.endsWith('**')
    ) {
      acc[acc.length - 1] = previousVal + ' ' + curr;
    } else if (
      previousVal &&
      previousVal.startsWith('*') &&
      !previousVal.endsWith('*')
    ) {
      acc[acc.length - 1] = previousVal + ' ' + curr;
    } else if (
      previousVal &&
      previousVal.startsWith('__') &&
      !previousVal.endsWith('__')
    ) {
      acc[acc.length - 1] = previousVal + ' ' + curr;
    } else if (
      previousVal &&
      previousVal.startsWith('~~') &&
      !previousVal.endsWith('~~')
    ) {
      acc[acc.length - 1] = previousVal + ' ' + curr;
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);

  return (
    <Animated.Text style={[styles.root, style]} {...animation} {...rest}>
      {text.map((substring, index) => {
        if (substring.startsWith('**')) {
          return (
            <Text style={styles.root__bold} {...rest} key={index}>
              {substring.replaceAll('**', '')}{' '}
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
        } else if (substring.startsWith('~~')) {
          return (
            <Text style={styles.root__strikethrough} {...rest} key={index}>
              {substring.split('~~')[1]}{' '}
            </Text>
          );
        } else {
          return `${substring} `;
        }
      })}
    </Animated.Text>
  );
};

TextConfig.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  animation: PropTypes.object,
  children: PropTypes.string.isRequired,
};
