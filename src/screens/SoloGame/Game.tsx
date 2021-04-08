import React, { useContext } from 'react';
import styled from 'styled-components/native';

import Text from 'components/Text';

import WordingContext from 'hooks/wording';
import GameContext from 'hooks/game';

import theme from 'static/theme';
import scale from 'static/scale';

import { ElementType, SizeType } from 'types';

import {
  BottomContainer,
  Countdown,
} from './SoloGameStyle';

export interface GameProps {
  currentWord: number;
  setCurrentWord: React.Dispatch<React.SetStateAction<number>>;
  resetWord: () => void;
}

const PlayContainer = styled.View`
  flex: 0.7;
  justify-content: space-evenly;
  align-items: center;
`;

const Game = (props: GameProps): JSX.Element => {
  const {
    currentWord,
    setCurrentWord,
  } = props;
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(WordingContext);
  const rules = [
    wordingContext.wording.round.firstRule,
  ]

  const onRoundComplete = (): void => {
    let newPool: string[] = []

    for (let i = 0; i < gameContext.solo.wordToFind.length; i++)
      newPool.push(gameContext.solo.wordToFind[i]);
    for (var i = newPool.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newPool[i];
      newPool[i] = newPool[j];
      newPool[j] = temp;
    }
    gameContext.setSolo({
      ...gameContext.solo,
      wordToFind: newPool,
      clueGiver: (gameContext.solo.clueGiver + 1) % gameContext.solo.players.length,
      currentPlayer: (gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length,
      roundStart: !gameContext.solo.roundStart,
    });
    setCurrentWord(0);
  }

  return (
    <>
      <PlayContainer>
        <Countdown
          key={gameContext.solo.players[gameContext.solo.currentPlayer].name}
          size={scale(50)}
          strokeWidth={scale(5)}
          isPlaying
          duration={gameContext.solo.chrono}
          trailColor={theme.grey}
          colors={[
            [theme.white, 0.8],
            [theme.error, 0.2],
          ]}
          onComplete={() => onRoundComplete()}
        >
          {({ remainingTime }) => {
            return (
              <Text
                font={ElementType.BOLD}
                size={SizeType.SMALL}
                style={{ textAlign: 'center' }}
              >
                {remainingTime}
              </Text>
            )
          }}
        </Countdown>

        <Text
          font={ElementType.BOLD}
          size={SizeType.BIG}
          style={{ textAlign: 'center' }}
        >
          {gameContext.solo.wordToFind[currentWord]}
        </Text>
      </PlayContainer>

      <BottomContainer>
        <Text
          font={ElementType.BOLD}
          size={SizeType.SMALL}
          color={theme.grey}
          style={{ textAlign: 'center' }}
        >
          {rules[gameContext.solo.round]}
        </Text>
      </BottomContainer>
    </>
  );
};

export default Game;
