import { useEffect, useState, createContext } from 'react';

const wordData = require('static/basicWords.json');

export interface PlayerHooks {
  words?: string[];
}

export interface useWordProps {
  wordList: string[];
  wordPersoList: string[];
  addWord: (word: string) => void;
  deleteWord: (index: number) => void;
  changeLanguage: (word: string) => void;
}

const WordsContext = createContext<useWordProps>({
  wordList: [],
  wordPersoList: [],
  addWord: (word: string) => {},
  deleteWord: (index: number) => {},
  changeLanguage: (word: string) => {},
});

export const useWords = (): useWordProps => {
  const [language] = useState('english');
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
    setWordList(wordData[language]);
  });

  return { wordList, wordPersoList , addWord, deleteWord, changeLanguage };
}

export default WordsContext