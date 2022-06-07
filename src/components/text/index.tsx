import * as React from 'react';
import { useMemo } from 'react';
import { Text as ReactNativeText } from 'react-native';

import { useTranslation } from 'react-i18next';

import { textPresets } from './text.presets';
import { TextProps } from './text.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export const Text = (props: TextProps) => {
  const [t] = useTranslation();
  // grab the props
  const {
    preset = 'bodyRegular',
    tx,
    txOptions,
    text,
    children,
    center,
    color,
    style: styleOverride,
    ...rest
  } = props;

  // figure out which content to use
  const i18nText = useMemo(() => tx && t(tx, txOptions), [tx, txOptions, t]);
  const content = useMemo(
    () => i18nText || text || children,
    [i18nText, text, children],
  );

  const style = textPresets[preset] || textPresets.default;
  const styles = [
    style,
    styleOverride,
    center && { textAlign: 'center' },
    !!color && { color },
  ];

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
};
