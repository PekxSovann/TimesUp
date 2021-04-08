import { createContext, useState } from 'react';

import { Player } from 'types';

export interface ChangeWordFct {
  solo: React.Dispatch<React.SetStateAction<ISoloGame>>;
  game: React.Dispatch<React.SetStateAction<IGame>>;
}

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
  currentPlayer: number;
  clueGiver: number;
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
}

export interface GameProps {
  game: IGame;
  solo: ISoloGame;
  isSolo: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
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
    currentPlayer: 0,
    clueGiver: 0,
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
  },
  isSolo: false,
  setSolo: () => {},
  setGame: () => {},
  setMode: () => {},
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
    currentWord: 0,
    currentPlayer: 0,
    clueGiver: 0,
    roundStart: false,
    displayRanking: false,
    players: [],
    gameWords: [],
    wordToFind: [],
  });
  const [isSolo, setMode] = useState(false);


  return { solo, game, setGame, setSolo, isSolo, setMode };
};

export default GameContext;
