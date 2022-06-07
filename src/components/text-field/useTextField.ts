import { useEffect, useMemo, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { useTranslation } from 'react-i18next';

import { onCheckType } from '@common';
import { colors } from '@theme';

import { TextFieldProps } from './text-field.props';
import { styles } from './text-field.style';

export default function useTextField(props: TextFieldProps) {
  const {
    isPassword = false,
    placeholder,
    placeholderTx,
    leftIcon,
    style: styleOverride,
    inputStyle: inputStyleOverride,
    defaultValue,
    rxRemove,
    error,
    disabled,
    nameTrigger,
    onBlur,
    trigger,
    onFocus,
    onSubmit,
    onChangeText,
    ...rest
  } = props;

  const [t] = useTranslation();

  const [localDefaultValue, setLocalDefaultValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const [showSecure, setShowSecure] = useState(isPassword);

  // effect
  useEffect(() => {
    if (defaultValue) {
      setLocalDefaultValue(String(defaultValue));
    }
  }, [defaultValue]);

  const placeHolderText = useMemo(
    () => (placeholderTx && t(placeholderTx)) || placeholder || '',
    [placeholder, placeholderTx, t],
  );

  const inputFontStyle = useMemo(() => {
    if (!!localDefaultValue || !!value) {
      return styles.inputValueFont;
    }
    return styles.placeholderFont;
  }, [localDefaultValue, value]);

  const iconColor = useMemo(() => {
    if (focused) {
      return colors.primary[500];
    }
    if (!!localDefaultValue || !!value) {
      return colors.grey[900];
    }
    return colors.grey[500];
  }, [value, focused, localDefaultValue]);

  const toggleSecure = () => {
    setShowSecure(showSecure => !showSecure);
  };

  const _onFocus = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onCheckType(onFocus, 'function')) {
      onFocus(e);
    }
    setFocused(true);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onCheckType(onBlur, 'function')) {
      onBlur(e);
    }
    setFocused(false);
  };

  const _onChangeText = (text: string) => {
    const actualText =
      rxRemove !== undefined ? text.replace(rxRemove, '') : text;
    setValue(actualText);
    if (onCheckType(onChangeText, 'function')) {
      onChangeText(actualText);
    }
    if (
      onCheckType(trigger, 'function') &&
      onCheckType(nameTrigger, 'string')
    ) {
      setTimeout(() => {
        trigger(nameTrigger);
      }, 0);
    }
  };

  return {
    isPassword,
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
  };
}
