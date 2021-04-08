import styled from 'styled-components/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import PlaySvg from 'assets/Play.svg';
import CorrectSvg from 'assets/Correct.svg';
import IncorrectSvg from 'assets/Incorrect.svg';

import theme from 'static/theme';
import scale from 'static/scale';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const GameContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const LeftContainer = styled.View`
  flex: 0.2;
  justify-content: space-evenly;
  align-items: center;
`;

const TeamContainer = styled.View`
  height: ${scale(75)}px;
  width: ${scale(100)}px;
  border-radius: ${scale(10)}px;
  border-width: ${scale(2)}px;
  border-color: ${theme.white};
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.View`
  flex: 0.6;
`;

const RightContainer = styled.View`
  flex: 0.2;
  justify-content: space-evenly;
  align-items: center;
`;

const Countdown = styled(CountdownCircleTimer)`
`;

const PlayButton = styled.TouchableOpacity`
  height: ${scale(125)}px;
  width: ${scale(125)}px;
  border-radius: ${scale(100)}px;
`;

const Play = styled(PlaySvg)``;

const Correct = styled(CorrectSvg)``;

const Incorrect = styled(IncorrectSvg)``;

const PlayContainer = styled.View`
  flex: 0.7;
  margin-top: ${scale(5)}px;
  justify-content: center;
  align-items: center;
`;

const RightButton = styled.TouchableOpacity`
  height: ${scale(60)}px;
  width: ${scale(60)}px;
`;

export {
  Container,
  BottomContainer,
  GameContainer,
  LeftContainer,
  TeamContainer,
  MainContainer,
  Countdown,
  PlayButton,
  PlayContainer,
  Play,
  RightContainer,
  RightButton,
  Correct,
  Incorrect,
};
