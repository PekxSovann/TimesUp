import { createContext, useState } from 'react';

const wordingData = require('static/appText.json');

interface IWordingData {
  french: Language;
  english: Language;
}

interface Language {
  game: {
    points: string;
    team: string;
  },
  round: {
    firstRule: string;
    secondRule: string;
    lastRule: string;
  },
  gameSettings: {
    team: string;
    member: string;
    memberPerTeam: string;
    chrono: string;
    word: string;
    perWord: string;
    ranking: string;
  },
  preGame: {
    soloTitle: string;
    soloDescription: string;
    gameTitle: string;
    gameDescription: string;
  };
  selection: {
    playerSelect: string;
    wordSelect: string;
  };
  input : {
    inputPlayer: string;
    inputWord: string;
  };
  buttons: {
    play: string;
    rules: string;
    quit: string;
    create: string;
    yes: string;
    no: string;
    skip: string;
    next: string;
  };
  modal: {
    language: string;
    default: string;
    loading: string;
    error: string;
    quit: string;
  };
  errors: {
    player: string;
  };
  pos: {
    first: string;
    second: string;
    third: string;
    other: string;
  };
}

export interface WordingProps {
  wording: Language;
  language: string;
  changeLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const WordingContext = createContext<WordingProps>({
  wording: {
    game: { team: '', points: '' },
    gameSettings: { team: '', memberPerTeam: '', chrono: '', word: '', perWord: '', member: '', ranking: '' },
    preGame: { soloTitle: '', soloDescription: '', gameTitle: '', gameDescription: '' },
    selection: { playerSelect: '', wordSelect: '' },
    input : { inputPlayer: '', inputWord: '' },
    buttons: { play: '', rules: '', quit: '', create: '', yes: '', no: '', skip: '', next: '' },
    modal: { language: '', default: '', loading: '', error: '', quit: '' },
    errors: { player: '' },
    round: { firstRule: '', secondRule: '', lastRule: '' },
    pos: { first: '', second: '', third: '', other: '' }
  },
  changeLanguage: () => {},
  language: 'english',
})

export const useWording = (): WordingProps => {
  const [language, setLanguage] = useState('english');
  const wordings: IWordingData = wordingData;

  return { wording: wordings[language], language, changeLanguage: setLanguage };
};

export default WordingContext;
