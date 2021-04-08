import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

import scale from 'static/scale';
import theme from 'static/theme';

import { FlagButtonProps, ElementType, SizeType } from 'types';

import EnglishFlag from 'assets/EnglishFlag.svg';
import FrenchFlag from 'assets/FrenchFlag.svg';

import Text from 'components/Text';

const Container = styled.View`
  flex: 0.35;
  background-color: #fff;
  border-radius: ${scale(10)}px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ModalText = styled(Text)`
  margin-top: ${scale(5)}px;
  margin-left: ${scale(10)}px;
`;

const DefaultText = styled(Text)`
  margin-left: ${scale(10)}px;
`;

const FlagContainer = styled.View`
  height: ${scale(50)}px;
  flex-direction: row;
  justify-content: flex-start;
`;

const FlagButton = styled.TouchableOpacity`
  height: 100%;
  width: ${scale(50)}px;
  margin-left: ${scale(10)}px;
`

const FlagFrench = styled(FrenchFlag)<FlagButtonProps>`
  opacity: ${(props): number => props.isSelected ? 0.5 : 1};
`;

const FlagEnglish = styled(EnglishFlag)<FlagButtonProps>`
  opacity: ${(props): number => props.isSelected ? 0.5 : 1};
`;

const DefaultWords = styled.View`
  height: ${scale(50)}px;
  margin-right: ${scale(10)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const CustomCheckBox = styled(CheckBox)`
  margin-top: ${scale(5)}px;
`;

const style = {
  buttonWidth: scale(250),
  buttonHeight: scale(40),
  borderRadius: scale(25),
  borderColor: 'transparent',
  borderWidth: 0,
};
const gradientStyle = {
  borderRadius: scale(25),
  justifyContent: 'center',
  alignItems: 'center',
};
const textProps = {
  size: SizeType.MEDIUM,
  color: theme.black,
  font: ElementType.SEMIBOLD,
}

export {
  Container,
  DefaultText,
  ModalText,
  FlagContainer,
  FlagFrench,
  FlagEnglish,
  FlagButton,
  DefaultWords,
  CustomCheckBox,
  style,
  gradientStyle,
  textProps,
  ButtonContainer,
};
