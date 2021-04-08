import React, { useContext, useEffect, useState } from 'react';
import Orientation from 'react-native-orientation-locker';
import { BackHandler } from 'react-native';

import IGHeader from 'components/InGameHeader';
import QuitGameModal from 'components/QuitGameModal';

import GameContext from 'hooks/game';

import {
  Container,
  GameContainer,
  MainContainer,
} from './SoloGameStyle';
import LeftInfo from './LeftInfo';
import RightButtons from './RightButtons';
import StartingRound from './StartingRound';
import Ranking from './Ranking';
import Game from './Game';

const SoloGame = (): JSX.Element => {
  const gameContext = useContext(GameContext);
  const [currentWord, setCurrentWord] = useState(0);
  const [start, setStarts] = useState(false);

  const mainContainerDisplay = (): JSX.Element => {
    if (!gameContext.solo.roundStart && !gameContext.solo.displayRanking)
      return <StartingRound start={start} setStarts={setStarts} />
    if (!gameContext.solo.roundStart && gameContext.solo.displayRanking)
      return <Ranking setStart={setStarts} />
    return <Game resetWord={resetWord} currentWord={currentWord} setCurrentWord={setCurrentWord} />
  }

  const resetWord = (): void => {
    let newPool: string[] = []

    for (let i = 0; i < gameContext.solo.gameWords.length; i++)
        newPool.push(gameContext.solo.gameWords[i]);
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
      currentWord: 0,
      round: gameContext.solo.round + 1,
      roundStart: !gameContext.solo.roundStart,
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
      <IGHeader isSolo />

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

export default SoloGame;
