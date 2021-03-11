import { TextStyle } from './style';

export interface TextProps {
  children?: React.ReactNode;
  size: SizeType;
  color?: string;
  font: ElementType;
  style?: TextStyle;
};

export interface TextComponentProps {
  size: number;
  color: string;
};

export enum ElementType {
  BOLD = 'bold',
  SEMIBOLD = 'semiBold',
  NORMAL = 'normal',
};

export enum SizeType {
  VERYSMALL = 8,
  SMALL = 18,
  NORMAL = 24,
  MEDIUM = 30,
  BIG = 36,
}
