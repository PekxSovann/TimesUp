import { createContext, useState } from 'react';

import { Player } from 'types';

interface ISoloGame {
  chrono: number;
  words: number;
  currentWord: number;
  players: Player[];
  round: number;
  roundStart: boolean;
  displayRanking: boolean;
  gameWords: string[];
  wordToFind: string[];
  wordInArray: number; /// -----> ?????
}

export interface Teams {
  members: Player[];
  points: number;
  number: number;
}

interface IGame {
  teams: Teams[];
  numberOfTeam: number;
  memberPerTeam: number;
  chrono: number;
  words: number;
  currentWord: number;
  round: number;
  roundStart: boolean;
  displayRanking: boolean;
  currentTeam: number;
  gameWords: string[];
  wordToFind: string[];
  wordInArray: number; /// -----> ?????
}

export interface GameProps {
  game: IGame;
  solo: ISoloGame;
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
  setSolo: React.Dispatch<React.SetStateAction<ISoloGame>>;
}

const GameContext = createContext<GameProps>({
  solo: {
    chrono: 0,
    words: 0,
    currentWord: 0,
    players: [],
    round: 0,
    roundStart: false,
    displayRanking: false,
    gameWords: [],
    wordToFind: [],
    wordInArray: 0,
  },
  game: {
    teams: [],
    numberOfTeam: 0,
    memberPerTeam: 0,
    currentTeam: 0,
    chrono: 0,
    words: 0,
    currentWord: 0,
    round: 0,
    roundStart: false,
    displayRanking: false,
    gameWords: [],
    wordToFind: [],
    wordInArray: 0,
  },
  setSolo: () => {},
  setGame: () => {},
})

export const useGame = (): GameProps => {
  const [game, setGame] = useState<IGame>({
    words: 0,
    round: 0,
    chrono: 0,
    currentWord: 0,
    currentTeam: 0,
    numberOfTeam: 0,
    memberPerTeam: 0,
    wordInArray: 0,
    roundStart: false,
    displayRanking: false,
    teams: [],
    gameWords: [],
    wordToFind: [],
  });
  const [solo, setSolo] = useState<ISoloGame>({
    round: 0,
    words: 0,
    chrono: 0,
    wordInArray: 0,
    currentWord: 0,
    roundStart: false,
    displayRanking: false,
    players: [],
    gameWords: [],
    wordToFind: [],
  });


  return { solo, game, setGame, setSolo };
};

export default GameContext;
