import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import Text from 'components/Text';
import PreGameHeader from 'components/PreGameHeader';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { ElementType, SizeType } from 'types';

import WordsContext from 'hooks/words';
import WordingContext from 'hooks/wording';
import GameContext from 'hooks/game';

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
  const navOption: NavigationOption = {
    solo: 'SoloGame',
    game: 'TeamGame'
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
            onPress={() => navigation.navigate(navOption[option])}
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
