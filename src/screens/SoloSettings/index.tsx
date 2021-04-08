import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import PreGameHeader from 'components/PreGameHeader';
import GameSettingComponent from 'components/GameSettingComponent';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { Player } from 'types';

import GameContext from 'hooks/game';
import WordingContext from 'hooks/wording';
import WordContext from 'hooks/words';
import PlayerContext from 'hooks/players';

import {
  Container,
  OptionContainer,
  ButtonContainer
} from './SoloSettingsStyle';

const SoloSettings = (): JSX.Element => {
  const navigation = useNavigation();
  const gameContext = useContext(GameContext);
  const playerContext = useContext(PlayerContext);
  const wordContext = useContext(WordContext);
  const wordingContext = useContext(WordingContext);
  const [solo, setSolo] = useState({
    chrono: 10,
    words: 20,
    currentWord: 0,
    round: 0,
    roundStart: false,
    displayRanking: false,
    gameWords: [],
    wordToFind: [],
    currentPlayer: 1,
    clueGiver: 0,
  });

  const confirmSettings = (): void => {
    const players: Player[] = [];
    const tmp: string[] = [];
    const wordToFind: string[] = [];
    const pos: number[] = [];
    let random: number = 0;

    for (let i = 0; i < playerContext.playerList.length; i++)
      players.push(playerContext.playerList[i]);
    for (let i = 0; i < wordContext.wordPersoList.length; i++)
      tmp.push(wordContext.wordPersoList[i]);
    while (tmp.length < solo.words) {
      random = Math.floor(Math.random() * wordContext.wordList.length);
      if (pos.includes(random))
        continue;
      pos.push(random);
      tmp.push(wordContext.wordList[random]);
      wordToFind.push(wordContext.wordList[random]);
    }
    gameContext.setSolo({
      ...solo,
      gameWords: tmp,
      wordToFind,
      players: players,
    });
    navigation.navigate('WordSelection', {
      option: 'solo',
    });
  };

  return (
    <Container>
      <PreGameHeader />

      <OptionContainer>
        <GameSettingComponent
          incrementFct={(number: number) => setSolo({ ...solo, ['chrono']: number })}
          stopIncCdt={solo.chrono > 998}
          stopDctCdt={solo.chrono <= 5}
          value={solo.chrono}
          text={wordingContext.wording.gameSettings.chrono}
          subText={wordingContext.wording.gameSettings.perWord}
        />

        <GameSettingComponent
          incrementFct={(number: number) => setSolo({ ...solo, ['words']: number })}
          stopIncCdt={solo.words >= wordContext.wordList.length + wordContext.wordPersoList.length}
          stopDctCdt={solo.words <= 1}
          value={solo.words}
          text={wordingContext.wording.gameSettings.word}
          subText={''}
        />
      </OptionContainer>

      <ButtonContainer>
        <LinearGradientButton
          onPress={() => confirmSettings()}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.word}
        />
      </ButtonContainer>
    </Container>
  );
};

export default SoloSettings;
