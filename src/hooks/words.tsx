import { useEffect, useState, createContext, useContext } from 'react';

const wordData = require('static/basicWords.json');

export interface useWordProps {
  wordList: string[];
  wordPersoList: string[];
  useDefaultWords: boolean;
  setDefaultWord: (choice: boolean) => void,
  addWord: (word: string) => void;
  deleteWord: (index: number) => void;
  changeLanguage: (word: string) => void;
  changeWord: (word: number, words: string[]) => string[];
}

const WordsContext = createContext<useWordProps>({
  wordList: [],
  wordPersoList: [],
  useDefaultWords: true,
  setDefaultWord: (choice: boolean) => {},
  addWord: (word: string) => {},
  deleteWord: (index: number) => {},
  changeLanguage: (word: string) => {},
  changeWord: (word: number, words: string[]) => { return []; },
});

export const useWords = (): useWordProps => {
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
    const tmp = wordList;
    setWordList(wordHistory[language]);
    setHistory({ ...wordHistory, [defaultLanguage]: tmp });
    setDefault(language);
  }

  const changeWord = (index: number, words: string[]): string[] => {
    const tmp: string[] = [];
    const wordToReplace = words[index];
    let random: number = 0;

    for (let i = 0; i < words.length; i++)
      tmp.push(words[i]);
    while (wordToReplace === words[index]) {
      random = Math.floor(Math.random() * wordList.length);
      if (tmp.includes(wordList[random]))
        continue;
      tmp[index] = wordList[random];
      break;
    }
    console.log(tmp);
    return tmp;
  }

  useEffect(() => {
    setHistory(wordData);
    setWordList(wordData[defaultLanguage]);
  }, []);

  return {
    wordList,
    wordPersoList,
    useDefaultWords,
    setDefaultWord,
    addWord,
    deleteWord,
    changeLanguage,
    changeWord,
  };
}

export default WordsContext