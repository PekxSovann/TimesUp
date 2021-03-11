import styled from 'styled-components/native';
import Modal from 'react-native-modal';

import scale from 'static/scale';
import theme from 'static/theme';

import { ElementType, SizeType } from 'types';

const Container = styled.View`
  background-color: ${theme.white};
  flex: 0.6;
  width: 50%;
  border-radius: ${scale(10)}px;
`;

const CustomModal = styled(Modal)`
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  flex: 0.5;
`;

const ButtonContainer = styled.View`
  flex: 0.5;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const style = {
  buttonWidth: scale(100),
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
  size: SizeType.BIG,
  color: theme.black,
  font: ElementType.SEMIBOLD,
};

export {
  Container,
  CustomModal,
  TextContainer,
  style,
  gradientStyle,
  textProps,
  ButtonContainer
};
