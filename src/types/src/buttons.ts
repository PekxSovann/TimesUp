import { ButtonGradientStyle, GradientStyle } from './style';
import { TextProps } from './text';

export interface SelectionButtonProps {
  isSelect: boolean;
};

export interface GradientButtonProps {
  onPress: () => void;
  style: ButtonGradientStyle;
  gradientStyle: GradientStyle;
  textProps: TextProps;
  label: string;
};