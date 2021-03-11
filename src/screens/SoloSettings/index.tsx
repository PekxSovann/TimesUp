import React, { useState, useContext, useEffect } from 'react';
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
  const [solo, setSolo] = useState({ chrono: 60, words: 20, currentWord: 0, round: 0 });

  const confirmSettings = (): void => {
    const tmp: Player[] = [];

    for (let i = 0; i < playerContext.playerList.length; i++)
      tmp.push(playerContext.playerList[i]);
    gameContext.setSolo({ ...solo, players: tmp });
    navigation.navigate('Home');
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
          label={wordingContext.wording.buttons.play}
        />
      </ButtonContainer>
    </Container>
  );
};

export default SoloSettings;
