import React, { useContext, useEffect, useState } from 'react';
import Orientation from 'react-native-orientation-locker';
import { BackHandler } from 'react-native';

import InGameHeader from 'components/InGameHeader';
import QuitGameModal from 'components/QuitGameModal';

import GameContext from 'hooks/game';

import {
  Container,
  GameContainer,
  MainContainer,
} from './TeamGameStyle';
import LeftInfo from './LeftInfos';
import RightButtons from './RightButtons';
import StartingRound from './StartingRound';
import Game from './Game';
import Ranking from './Ranking';

const TeamGame = (): JSX.Element => {
  const gameContext = useContext(GameContext);
  const [currentWord, setCurrentWord] = useState(0);
  const [start, setStarts] = useState(false);

  const mainContainerDisplay = (): JSX.Element => {
    if (!gameContext.game.roundStart && !gameContext.game.displayRanking)
      return <StartingRound start={start} setStarts={setStarts} />
    if (!gameContext.game.roundStart && gameContext.game.displayRanking)
      return <Ranking setStart={setStarts} />
    return <Game resetWord={resetWord} currentWord={currentWord} setCurrentWord={setCurrentWord} />
  }

  const resetWord = (): void => {
    let newPool: string[] = []
    let teams: number = 0;

    for (let i = 0; i < gameContext.game.gameWords.length; i++)
        newPool.push(gameContext.game.gameWords[i]);
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
      currentWord: 0,
      round: gameContext.game.round + 1,
      roundStart: !gameContext.game.roundStart,
      displayRanking: true,
    });
    setCurrentWord(0);
  }

  useEffect(() => {
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', () => true)
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, []);

  return (
    <Container>
      <InGameHeader />

      <GameContainer>
        <LeftInfo />

        <MainContainer>
          {mainContainerDisplay()}
        </MainContainer>

        <RightButtons currentWord={currentWord} setCurrentWord={setCurrentWord} resetWord={resetWord} />
      </GameContainer>

      <QuitGameModal />
    </Container>
  );
};

export default TeamGame;
