import { Text } from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

export const StyledTextSubstring = ({ text, fontSize, color, lineHeight }) => {
  const substrings = text.split(' ');
  const style = { fontSize: fontSize, color: color };

  return (
    <Text style={{ ...style, textAlign: 'center', lineHeight: lineHeight }}>
      {substrings.map((substring, index) => {
        if (substring.startsWith('**')) {
          return (
            <Text style={{ ...style, fontWeight: '900' }} key={index}>
              {substring.split('**')[1]}{' '}
            </Text>
          );
        } else {
          return `${substring} `;
        }
      })}
    </Text>
  );
};

StyledTextSubstring.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineHeight: PropTypes.number,
};
