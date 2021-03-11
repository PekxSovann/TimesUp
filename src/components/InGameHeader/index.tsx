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
  const navigation = useNavigation();
  const modalContext = useContext(ModalContext);
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(WordingContext);

  return (
    <Container>
      <LogoContainer>
        <LogoGame width={'100%'} height={'100%'} />
      </LogoContainer>

      <TitleContainer>
        <Text
          font={ElementType.BOLD}
          size={gameContext.game.roundStart ? SizeType.MEDIUM : SizeType.BIG}
        >
          {isSolo ? `${wordingContext.wording.preGame.soloTitle}: Round ${gameContext.game.round + 1}` : `Round ${gameContext.game.round + 1}`}
        </Text>

        {gameContext.game.roundStart && (
          <Text
            font={ElementType.BOLD}
            size={SizeType.NORMAL}
          >
            {`${wordingContext.wording.gameSettings.word}: ${gameContext.game.currentWord + 1}/${gameContext.game.words}`}
          </Text>
        )}

        {gameContext.game.displayRanking && (
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
