import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import PreGameHeader from 'components/PreGameHeader';
import LinearGradientButton from 'components/GradientButton';
import TeamListComponent from 'components/TeamListComponent';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { ElementType, SizeType } from 'types';

import WordingContext from 'hooks/wording';
import WordsContext from 'hooks/words';
import GameContext, { Teams } from 'hooks/game';

import {
  Container,
  TeamContainer,
  ButtonContainer,
  TitleContainer,
  CustomText,
  TeamListContainer,
  TeamList
} from './TeamVerificationStyle';

interface KeyList {
  item: Teams,
  index: number
}

const TeamVerification = (): JSX.Element => {
  const navigation = useNavigation();
  const wordingContext = useContext(WordingContext);
  const wordsContext = useContext(WordsContext);
  const gameContext = useContext(GameContext);

  const startGame = (): void => {
    const tmp: string[] = [];
    const wordToFind: string[] = [];
    const pos: number[] = [];
    let random: number = 0;

    for (let i = 0; i < wordsContext.wordPersoList.length; i++)
      tmp.push(wordsContext.wordPersoList[i]);
    while (tmp.length < gameContext.game.words) {
      random = Math.floor(Math.random() * wordsContext.wordList.length);
      if (pos.includes(random))
        continue;
      pos.push(random);
      tmp.push(wordsContext.wordList[random]);
      wordToFind.push(wordsContext.wordList[random]);
    }
    gameContext.setGame({ ...gameContext.game, gameWords: tmp, wordToFind });
    navigation.navigate('TeamGame');
  }

  return (
    <Container>
      <PreGameHeader />

      <TeamContainer>
        <TitleContainer>
          <CustomText
            size={SizeType.BIG}
            font={ElementType.BOLD}
          >
            {wordingContext.wording.gameSettings.team}
          </CustomText>
        </TitleContainer>

        <TeamListContainer>
          <TeamList
            data={gameContext.game.teams}
            listKey={item => (item.name + item.points).toString()}
            keyExtractor={item => (item.members[0].name + item.points).toString()}
            renderItem={({ item, index }: KeyList) => <TeamListComponent index={index} members={item} /> }
          />
        </TeamListContainer>
      </TeamContainer>

      <ButtonContainer>
        <LinearGradientButton
          onPress={() => startGame()}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.play}
        />
      </ButtonContainer>
    </Container>
  );
};

export default TeamVerification;
