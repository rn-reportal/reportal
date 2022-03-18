import { TextInput, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

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
  For all other icons, the prop iconName should be exactly like Feather icons names. */

  return (
    <View style={styles.root}>
      {iconName && (
        <Icon
          style={[styles.root__icon, { color: colors.secondary }]}
          name={isPassword ? secureIcon : iconName}
          onPress={isPassword ? handlePasswordVisibilityToggle : undefined}
        />
      )}
      <TextInput
        style={[
          styles.root__input,
          { color: colors.secondary },
          scheme === 'dark' && { backgroundColor: '#1d2736' },
          scheme === 'light' && { backgroundColor: '#1d2736' },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
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
  handleOnChange: PropTypes.func,
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
  defaultValue: PropTypes.string,
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
  iconName: PropTypes.oneOf(['search']),
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
};