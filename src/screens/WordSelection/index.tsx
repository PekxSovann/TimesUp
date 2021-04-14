import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import Text from 'components/Text';
import PreGameHeader from 'components/PreGameHeader';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { ElementType, SizeType } from 'types';

import WordsContext from 'hooks/words';
import WordingContext from 'hooks/wording';
import GameContext, { ChangeWordFct } from 'hooks/game';

import {
  Container,
  ListContainer,
  WordContainer,
  TitleContainer,
  ButtonContainer
} from './WordSelectionStyle';
import ListWords from './ListWords';

interface NavigationOption {
  solo: string;
  game: string;
}

export interface WordSelectionProps {
  option: string;
}

const WordSelection = ({ route }): JSX.Element => {
  const { option } = route.params;
  const navigation = useNavigation();
  const wordingContext = useContext(WordingContext);
  const wordsContext = useContext(WordsContext);
  const gameContext = useContext(GameContext);
  const navOption: NavigationOption = {
    solo: 'SoloGame',
    game: 'TeamGame'
  }
  const functions: ChangeWordFct = {
    solo: gameContext.setSolo,
    game: gameContext.setGame,
  }

  const startGame = (): void => {
    const tmp: string[] = [];
    const wordToFind: string[] = [];
    const pos: number[] = [];
    let random: number = 0;

    for (let i = 0; i < wordsContext.wordPersoList.length; i++) {
      tmp.push(wordsContext.wordPersoList[i]);
      wordToFind.push(wordsContext.wordPersoList[i]);
    }
    while (tmp.length < gameContext[option].words) {
      random = Math.floor(Math.random() * wordsContext.wordList.length);
      if (pos.includes(random))
        continue;
      pos.push(random);
      tmp.push(wordsContext.wordList[random]);
      wordToFind.push(wordsContext.wordList[random]);
    }
    for (var i = wordToFind.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = wordToFind[i];
      wordToFind[i] = wordToFind[j];
      wordToFind[j] = temp;
    }
    gameContext.setGame({
      ...gameContext[option],
      gameWords: tmp,
      wordToFind
    });
    navigation.navigate(navOption[option]);
  }

  return (
    <Container>
      <PreGameHeader option={false} />

      <ListContainer>
        <TitleContainer>
          <Text
            size={SizeType.BIG}
            font={ElementType.BOLD}
          >
            {wordingContext.wording.wordSettings.title}
          </Text>
        </TitleContainer>

        <WordContainer>
          <ListWords
            reload={wordsContext.changeWord}
            option={option}
          />
        </WordContainer>

        <ButtonContainer>
          <LinearGradientButton
            onPress={() => startGame()}
            style={style}
            textProps={textProps}
            gradientStyle={gradientStyle}
            label={wordingContext.wording.buttons.play}
          />
        </ButtonContainer>
      </ListContainer>
    </Container>
  );
};

export default WordSelection;
