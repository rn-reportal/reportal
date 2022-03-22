import { TextInput, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import { theme } from '@/theme';
import { styles } from '@/components/shared/Input/Input.styles';

export const Input = ({
  handleOnChange,
  handleOnSubmit,
  placeholder,
  autoComplete,
  autoCorrect,
  defaultValue,
  textContentType,
  secureTextEntry,
  iconName,
  returnKeyType,
}) => {
  const [secure, setSecure] = useState(secureTextEntry);

  const [secureIcon, setSecureIcon] = useState('eye-off');

  const scheme = useColorScheme();

  const { colors } = useTheme();

  const handlePasswordVisibilityToggle = () => {
    setSecureIcon(secureIcon === 'eye-off' ? 'eye-on' : 'eye-off');
    setSecure(!secure);
  };

  const isPassword = textContentType === 'password';

  /* Password icon is automatically handled by secureIcon state and textContentType='password'.
  For all other icons, the prop iconName should be exactly like Feather/MaterialIcons icons names. */

  return (
    <View style={styles.root}>
      {iconName && (
        <Icon
          style={[styles.root__icon, { color: theme.dark.colors.secondary }]}
          name={isPassword ? secureIcon : iconName}
          onPress={isPassword ? handlePasswordVisibilityToggle : undefined}
        />
      )}
      <TextInput
        style={[
          styles.root__input,
          { color: theme.dark.colors.secondary, backgroundColor: '#1D2736' },
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.dark.colors.secondary}
        autocapitalize="none"
        onChange={handleOnChange}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        defaultValue={defaultValue}
        textContentType={textContentType}
        secureTextEntry={secure}
        returnKeyType={returnKeyType}
        onSubmitEditing={handleOnSubmit}
      />
    </View>
  );
};

Input.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf([
    'birthdate-day',
    'birthdate-full',
    'birthdate-month',
    'birthdate-year',
    'cc-csc',
    'cc-exp',
    'cc-exp-day',
    'cc-exp-month',
    'cc-exp-year',
    'cc-number',
    'email',
    'gender',
    'name',
    'name-family',
    'name-given',
    'name-middle',
    'name-middle-initial',
    'name-prefix',
    'name-suffix',
    'password',
    'password-new',
    'postal-address',
    'postal-address-country',
    'postal-address-extended',
    'postal-address-extended-postal-code',
    'postal-address-locality',
    'postal-address-region',
    'postal-code',
    'street-address',
    'sms-otp',
    'tel',
    'tel-country-code',
    'tel-national',
    'tel-device',
    'username',
    'username-new',
    'off',
  ]),
  autoCorrect: PropTypes.bool,
  defaultValue: PropTypes.string.isRequired,
  textContentType: PropTypes.oneOf([
    'none',
    'URL',
    'addressCity',
    'addressCityAndState',
    'addressState',
    'countryName',
    'creditCardNumber',
    'emailAddress',
    'familyName',
    'fullStreetAddress',
    'givenName',
    'jobTitle',
    'location',
    'middleName',
    'name',
    'namePrefix',
    'nameSuffix',
    'nickname',
    'organizationName',
    'postalCode',
    'streetAddressLine1',
    'streetAddressLine2',
    'sublocality',
    'telephoneNumber',
    'username',
    'password',
    'newPassword',
    'oneTimeCode',
  ]),
  secureTextEntry: PropTypes.bool,
  iconName: PropTypes.string,
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
};
