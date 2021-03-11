import React, { useContext } from 'react';

import { Player } from 'types';

import GameContext from 'hooks/game';

import {
  RightContainer,
  RightButton,
  Correct,
  Incorrect,
} from './SoloGameStyle';

export interface ButtonsProps {
  currentWord: number;
  setCurrentWord: React.Dispatch<React.SetStateAction<number>>;
  resetWord: () => void;
}

const RightButtons = (props: ButtonsProps): JSX.Element => {
  const { currentWord, setCurrentWord, resetWord } = props;
  const gameContext = useContext(GameContext);

  const wrongAnswer = (): void => {
    let playerBulk: Player[] = [];

    for (let i = 0; i < gameContext.solo.players.length; i++)
      playerBulk.push(gameContext.solo.players[i]);
    playerBulk[gameContext.solo.currentPlayer].points++;
    gameContext.setSolo({
      ...gameContext.solo,
      clueGiver: (gameContext.solo.clueGiver + 1) % gameContext.solo.players.length,
      currentPlayer: (gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length,
      currentWord: 0,
      roundStart: !gameContext.solo.roundStart,
      displayRanking: true,
      players: playerBulk
    });
    setCurrentWord(0);
  }

  const getNextPlayer = (): number => {
    if ((gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length === gameContext.solo.clueGiver)
      return ((gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length) + 1;
    return (gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length;
  }

  const rightAnswer = (): void => {
    let tmp: string[] = [];
    let playerBulk: Player[] = [];

    for (let i = 0; i < gameContext.solo.players.length; i++)
      playerBulk.push(gameContext.solo.players[i]);
    playerBulk[gameContext.solo.currentPlayer].points++;
    for (let i = 0; i < gameContext.solo.wordToFind.length; i++)
      tmp.push(gameContext.solo.wordToFind[i]);
    tmp.splice(currentWord, 1);
    if (tmp.length > 0 && tmp.length === currentWord)
      setCurrentWord(currentWord - 1);
    if (gameContext.solo.currentWord + 1 === gameContext.solo.words
      && tmp.length === 0)
      resetWord();
    else {
      gameContext.setSolo({
        ...gameContext.solo,
        wordToFind: tmp,
        currentWord: (gameContext.solo.currentWord + 1) % gameContext.solo.words,
        currentPlayer: getNextPlayer(),
        players: playerBulk,
      });
    }
  }

  return (
    <RightContainer>
      {gameContext.solo.roundStart && (
        <>
          <RightButton onPress={() => wrongAnswer()}>
            <Incorrect height="100%" width="100%" />
          </RightButton>

          <RightButton onPress={() => rightAnswer()}>
            <Correct height="100%" width="100%" />
          </RightButton>
        </>
      )}
    </RightContainer>
  );
};

export default RightButtons;
