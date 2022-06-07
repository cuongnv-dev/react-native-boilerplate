import React from 'react';

import { SvgCss } from 'react-native-svg';

import { SvgIconProps } from '../svg-icon.props';

const xml = (props: SvgIconProps) => {
  const { width = 13, stroke = '#fff', height = 10, strokeWidth = 3 } = props;
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5L5 8L11 2" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};

const CheckedBox = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;

export default CheckedBox;
