import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SettingButton, QuitLogo } from 'components/Header/HeaderStyle';
import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import ModalContext from 'hooks/modal';
import GameContext from 'hooks/game';
import WordingContext from 'hooks/wording';

import {
  Container,
  LogoContainer,
  ButtonContainer,
  LogoGame,
  TitleContainer,
} from './inGameHeaderStyle';

export interface IGHeader {
  isSolo?: boolean;
}

const PreGameHeader = (props: IGHeader): JSX.Element => {
  const {
    isSolo = false,
  } = props;
  const modalContext = useContext(ModalContext);
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(WordingContext);

  const getSubTitle = (): SizeType => {
    if (isSolo)
      return gameContext.solo.roundStart ? SizeType.MEDIUM : SizeType.BIG
    return gameContext.game.roundStart ? SizeType.MEDIUM : SizeType.BIG
  }

  return (
    <Container>
      <LogoContainer>
        <LogoGame width={'100%'} height={'100%'} />
      </LogoContainer>

      <TitleContainer>
        {(!isSolo && !gameContext.game.displayRanking || (isSolo && !gameContext.solo.displayRanking)) && (
          <Text
            font={ElementType.BOLD}
            size={gameContext.game.roundStart ? SizeType.MEDIUM : SizeType.BIG}
          >
            {isSolo ? `${wordingContext.wording.preGame.soloTitle}: Round ${gameContext.solo.round + 1}` : `Round ${gameContext.game.round + 1}`}
          </Text>
        )}

        {((!isSolo && gameContext.game.displayRanking) || (isSolo && gameContext.solo.displayRanking)) && (
          <Text
            font={ElementType.BOLD}
            size={getSubTitle()}
          >
            {((!isSolo && gameContext.game.round >= 3) || (isSolo && gameContext.solo.round >= 3)) ? (
              wordingContext.wording.gameSettings.final
            ) :(
              isSolo ? `${wordingContext.wording.preGame.soloTitle}: Round ${gameContext.solo.round + 1}` : `Round ${gameContext.game.round}`
            )}
          </Text>
        )}

        {((!isSolo && gameContext.game.roundStart) || (isSolo && gameContext.solo.roundStart)) && (
          <Text
            font={ElementType.BOLD}
            size={SizeType.NORMAL}
          >
            {isSolo ?
            `${wordingContext.wording.gameSettings.word}: ${gameContext.solo.currentWord + 1}/${gameContext.solo.words}`
            : `${wordingContext.wording.gameSettings.word}: ${gameContext.game.currentWord + 1}/${gameContext.game.words}`}
          </Text>
        )}

        {((!isSolo && gameContext.game.displayRanking && gameContext.game.round < 3)
        || (isSolo && gameContext.solo.displayRanking && gameContext.solo.round < 3)) && (
          <Text
            font={ElementType.BOLD}
            size={SizeType.NORMAL}
          >
            {wordingContext.wording.gameSettings.ranking}
          </Text>
        )}
      </TitleContainer>

      <ButtonContainer>
        <SettingButton onPress={() => modalContext.setQuitVisibility(true)}>
          <QuitLogo width={'100%'} height={'100%'} />
        </SettingButton>
      </ButtonContainer>
    </Container>
  );
};

export default PreGameHeader;
