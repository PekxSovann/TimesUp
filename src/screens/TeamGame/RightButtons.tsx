import React, { useContext } from 'react';

import GameContext, { Teams } from 'hooks/game';

import {
  RightContainer,
  RightButton,
  Correct,
  Incorrect,
} from './TeamGameStyle';

export interface ButtonsProps {
  currentWord: number;
  setCurrentWord: React.Dispatch<React.SetStateAction<number>>;
  resetWord: () => void;
}

const RightButtons = (props: ButtonsProps): JSX.Element => {
  const { currentWord, setCurrentWord, resetWord } = props;
  const gameContext = useContext(GameContext);

  const wrongAnswer = (): void => {
    setCurrentWord((currentWord + 1) % gameContext.game.wordToFind.length);
  }

  const rightAnswer = (): void => {
    let tmp: string[] = [];
    let currentTeam: Teams[] = [];

    for (let i = 0; i < gameContext.game.teams.length; i++)
      currentTeam.push(gameContext.game.teams[i]);
    currentTeam[gameContext.game.currentTeam].points++;
    for (let i = 0; i < gameContext.game.wordToFind.length; i++)
      tmp.push(gameContext.game.wordToFind[i]);
    tmp.splice(currentWord, 1);
    if (tmp.length > 0 && tmp.length === currentWord)
      setCurrentWord(currentWord - 1);
    if (gameContext.game.currentWord + 1 === gameContext.game.words
      && tmp.length === 0)
      resetWord();
    else {
      gameContext.setGame({
        ...gameContext.game,
        wordToFind: tmp,
        currentWord: (gameContext.game.currentWord + 1) % gameContext.game.words,
        teams: currentTeam,
      });
    }
  }

  return (
    <RightContainer>
      {gameContext.game.roundStart && (
        <>
          {gameContext.game.round !== 0 && (
            <RightButton onPress={() => wrongAnswer()}>
              <Incorrect height="100%" width="100%" />
            </RightButton>
          )}

          <RightButton onPress={() => rightAnswer()}>
            <Correct height="100%" width="100%" />
          </RightButton>
        </>
      )}
    </RightContainer>
  );
};

export default RightButtons;
