import styled from 'styled-components/native';

import Minus from 'assets/Minus.svg';
import Plus from 'assets/Plus.svg';

import scale from 'static/scale';

interface SVGProps {
  isDisabled: boolean;
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const TitleContainer = styled.View`
  flex: 0.5;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  flex: 0.5;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const CustomButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: ${scale(40)}px;
  width: ${scale(40)}px;
`;

const MinusSvg = styled(Minus)<SVGProps>`
  opacity: ${(props) => props.isDisabled ? 0.7 : 1};
`;

const PlusSvg = styled(Plus)<SVGProps>`
  opacity: ${(props) => props.isDisabled ? 0.7 : 1};
`;

export {
  Container,
  TitleContainer,
  ButtonContainer,
  CustomButton,
  MinusSvg,
  PlusSvg
};
