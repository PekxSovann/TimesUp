import React, { useContext } from 'react';
import Orientation from 'react-native-orientation-locker';
import { useNavigation } from '@react-navigation/native';

import LinearGradientButton from 'components/GradientButton';
import Text from 'components/Text';

import theme from 'static/theme';

import { ElementType, SizeType } from 'types';

import ModalContext from 'hooks/modal';
import WordingContext from 'hooks/wording';

import {
  Container,
  CustomModal,
  TextContainer,
  ButtonContainer,
  style,
  gradientStyle,
  textProps,
} from './QuitGameModalStyle';
import GameContext from '../../hooks/game';

const QuitGameModal = (): JSX.Element => {
  const navigation = useNavigation();
  const modalContext = useContext(ModalContext);
  const wordingContext = useContext(WordingContext);
  const gameContext = useContext(GameContext);

  const resetGame = (): void => {
    gameContext.setGame({
      teams: [],
      chrono: 60,
      words: 20,
      currentWord: 0,
      round: 0,
      numberOfTeam: 2,
      memberPerTeam: 2,
      roundStart: false,
      currentTeam: 0,
      displayRanking: false,
      gameWords: [],
      wordToFind: [],
    });
    gameContext.setSolo({
      chrono: 10,
      words: 20,
      currentWord: 0,
      players: [],
      round: 0,
      roundStart: false,
      displayRanking: false,
      gameWords: [],
      wordToFind: [],
      currentPlayer: 0,
      clueGiver: 0,
    })
  }

  return (
    <CustomModal
      isVisible={modalContext.quitModalVisible}
      onBackdropPress={() => modalContext.setQuitVisibility(false)}
    >
      <Container>
        <TextContainer>
          <Text
            style={{ textAlign: 'center' }}
            font={ElementType.BOLD}
            size={SizeType.MEDIUM}
            color={theme.error}
          >
            {wordingContext.wording.modal.quit}
          </Text>
        </TextContainer>

        <ButtonContainer>
          <LinearGradientButton
            onPress={() => modalContext.setQuitVisibility(false)}
            style={style}
            textProps={textProps}
            gradientStyle={gradientStyle}
            label={wordingContext.wording.buttons.no}
          />

          <LinearGradientButton
            onPress={() => {
              modalContext.setQuitVisibility(false);
              setTimeout(() => {
                resetGame();
                Orientation.lockToPortrait();
                navigation.navigate('Home', { screen: 'Home' });
              }, 300);
            }}
            style={style}
            textProps={textProps}
            gradientStyle={gradientStyle}
            label={wordingContext.wording.buttons.yes}
          />
        </ButtonContainer>
      </Container>
    </CustomModal>
    )
};

export default QuitGameModal;
