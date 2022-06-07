import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';

import { colors } from '@theme';

import { TextFieldProps } from './text-field.props';
import { styles } from './text-field.style';
import useTextField from './useTextField';

import { Icon } from '../icon';

export const TextField = forwardRef<any, TextFieldProps>((props, ref) => {
  const {
    isPassword = false,
    placeHolderText,
    leftIcon,
    styleOverride,
    inputStyleOverride,
    localDefaultValue,
    error,
    disabled,
    rest,
    focused,
    showSecure,
    inputFontStyle,
    iconColor,
    toggleSecure,
    _onBlur,
    _onChangeText,
    _onFocus,
    onSubmit,
  } = useTextField(props);

  return (
    <View
      style={[
        styles.container,
        styleOverride,
        focused && styles.focusedContainer,
        error && styles.errorContainer,
      ]}>
      {leftIcon && (
        <Icon
          icon={leftIcon}
          size={20}
          color={iconColor}
          style={styles.leftIcon}
        />
      )}
      <TextInput
        ref={ref}
        defaultValue={localDefaultValue}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        placeholder={placeHolderText}
        placeholderTextColor={colors.grey[500]}
        style={[styles.inputContainer, inputStyleOverride, inputFontStyle]}
        onFocus={_onFocus}
        onBlur={_onBlur}
        onSubmitEditing={onSubmit}
        onChangeText={_onChangeText}
        editable={!disabled}
        secureTextEntry={showSecure}
        {...rest}
      />
      {isPassword && (
        <Icon
          onPress={toggleSecure}
          icon={showSecure ? 'eyeSlash' : 'eye'}
          color={iconColor}
          size={20}
        />
      )}
    </View>
  );
});
