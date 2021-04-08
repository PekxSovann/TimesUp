import React, { useContext } from 'react';
import styled from 'styled-components/native';

import Text from 'components/Text';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import WordingContext from 'hooks/wording';
import GameContext from 'hooks/game';

import theme from 'static/theme';
import scale from 'static/scale';

import { ElementType, SizeType } from 'types';

import {
  BottomContainer,
  Countdown,
} from './TeamGameStyle';

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
    let teams: number = 0;
    let newPool: string[] = []

    for (let i = 0; i < gameContext.game.wordToFind.length; i++)
      newPool.push(gameContext.game.wordToFind[i]);
    for (var i = newPool.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newPool[i];
      newPool[i] = newPool[j];
      newPool[j] = temp;
    }
    teams = (gameContext.game.currentTeam + 1) % gameContext.game.numberOfTeam;
    gameContext.setGame({
      ...gameContext.game,
      wordToFind: newPool,
      currentTeam: teams,
      roundStart: !gameContext.game.roundStart,
    });
    setCurrentWord(0);
  }

  return (
    <>
      <PlayContainer>
        <Countdown
          size={scale(50)}
          strokeWidth={scale(5)}
          isPlaying
          duration={gameContext.game.chrono}
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
          {gameContext.game.wordToFind[currentWord]}
        </Text>
      </PlayContainer>

      <BottomContainer>
        {gameContext.game.round !== 0 ? (
          <LinearGradientButton
            onPress={() => {setCurrentWord((currentWord + 1) % gameContext.game.wordToFind.length)}}
            style={style}
            textProps={textProps}
            gradientStyle={gradientStyle}
            label={wordingContext.wording.buttons.skip}
          />
        ) : (
          <Text
            font={ElementType.BOLD}
            size={SizeType.SMALL}
            color={theme.grey}
            style={{ textAlign: 'center' }}
          >
            {rules[gameContext.game.round]}
          </Text>
        )}
      </BottomContainer>
    </>
  );
};

export default Game;
