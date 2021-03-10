import React from 'react';
import theme from 'static/theme';
import scale from 'static/scale';

import { TextProps, ElementType, SizeType } from 'types';

import { CustomText } from './TextStyle';

const Text = (props: TextProps): JSX.Element => {
  const {
    size,
    color = theme.white,
    font,
    style,
    children,
  } = props;

  const fonts = {
    [ElementType.NORMAL]: 'Dosis',
    [ElementType.SEMIBOLD]: 'Dosis-SemiBold',
    [ElementType.BOLD]: 'Dosis-Bold',
  }

  const sizes = {
    [SizeType.NORMAL]: `${scale(24)}px`,
    [SizeType.BIG]: `${scale(36)}px`,
  }

  const fontSelection = {
    [ElementType.NORMAL]: <CustomText font={fonts[font]} color={color} size={sizes[size]} style={style}>{children}</CustomText>,
    [ElementType.SEMIBOLD]: <CustomText font={fonts[font]} color={color} size={sizes[size]} style={style}>{children}</CustomText>,
    [ElementType.BOLD]: <CustomText font={fonts[font]} color={color} size={sizes[size]} style={style}>{children}</CustomText>,
  }

  return (
    fontSelection[font]
  );
};

export default Text;
