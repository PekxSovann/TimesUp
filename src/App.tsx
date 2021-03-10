import React from 'react';

import PlayersContext, { usePlayers } from 'hooks/players';
import WordsContext, { useWords } from 'hooks/words';

import { AppNavigationContainer } from './navigation';

const Root = () => {
  return (
    <PlayersContext.Provider value={usePlayers()}>
      <WordsContext.Provider value={useWords()}>
        <AppNavigationContainer />
      </WordsContext.Provider>
    </PlayersContext.Provider>
  );
};

export default Root;