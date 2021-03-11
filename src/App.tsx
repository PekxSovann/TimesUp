/// TODO: Put package imports first
import React from 'react';

/// TODO: Then put components imports

/// TODO: Then put types

/// TODO: Then put SVG and images

/// TODO: Then put statics files

/// TODO: Then put hooks files
import PlayersContext, { usePlayers } from 'hooks/players';
import WordsContext, { useWords } from 'hooks/words';
import WordingContext, { useWording } from 'hooks/wording';
import ModalContext, { useModal } from 'hooks/modal';
import GameContext, { useGame } from 'hooks/game';

/// TODO: Then put local imports
import { AppNavigationContainer } from './navigation';

const Root = () => {
  return (
    <PlayersContext.Provider value={usePlayers()}>
      <WordingContext.Provider value={useWording()}>
        <WordsContext.Provider value={useWords()}>
          <ModalContext.Provider value={useModal()}>
            <GameContext.Provider value={useGame()}>
              <AppNavigationContainer />
            </GameContext.Provider>
          </ModalContext.Provider>
        </WordsContext.Provider>
      </WordingContext.Provider>
    </PlayersContext.Provider>
  );
};

export default Root;