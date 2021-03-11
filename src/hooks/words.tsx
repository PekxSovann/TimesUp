import { useEffect, useState, createContext, useContext } from 'react';

import WordingContext from 'hooks/wording';

const wordData = require('static/basicWords.json');

export interface useWordProps {
  wordList: string[];
  wordPersoList: string[];
  useDefaultWords: boolean;
  setDefaultWord: (choice: boolean) => void,
  addWord: (word: string) => void;
  deleteWord: (index: number) => void;
  changeLanguage: (word: string) => void;
}

const WordsContext = createContext<useWordProps>({
  wordList: [],
  wordPersoList: [],
  useDefaultWords: true,
  setDefaultWord: (choice: boolean) => {},
  addWord: (word: string) => {},
  deleteWord: (index: number) => {},
  changeLanguage: (word: string) => {},
});

export const useWords = (): useWordProps => {
  const wordingContext = useContext(WordingContext);
  const [useDefaultWords, setDefaultWord] = useState(true);
  const [wordList, setWordList] = useState<string[]>([]);
  const [wordPersoList, setWordPersoList] = useState<string[]>([]);
  const [defaultLanguage, setDefault] = useState('english')
  const [wordHistory, setHistory] = useState({
    french: [],
    english: []
  });
  const addWord = (word: string): void => {
    const tmp = wordPersoList;
    tmp.push(word);
    setWordPersoList(tmp);
  };

  const deleteWord = (index: number): void => {
    const tmp = wordPersoList;
    tmp.splice(index, 1);
    setWordPersoList(tmp);
  }

  const changeLanguage = (language: string): void => {
    const tmp = new Array(wordList);
    setWordList(wordHistory[language]);
    setHistory({ ...wordHistory, [defaultLanguage]: tmp });
    setDefault(language);
  }

  useEffect(() => {
    setHistory(wordData);
    setWordList(wordData[wordingContext.language]);
  });

  return {
    wordList,
    wordPersoList,
    useDefaultWords,
    setDefaultWord,
    addWord,
    deleteWord,
    changeLanguage
  };
}

export default WordsContext