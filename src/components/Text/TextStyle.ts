import styled from 'styled-components/native';

import { TextComponentProps } from 'types';

const CustomText = styled.Text<TextComponentProps>`
  font-size: ${(props): number => props.size};
  color: ${(props): string => props.color};
  font-family: ${(props): string => props.font};;
`;

export {
  CustomText,
};
